import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { z } from 'zod'
import { strapiAPI } from "@/data/server-functions";
import { PostCard } from "@/components/custom/posts-card";
import { Badge } from "@/components/retroui/Badge";

 interface IOrder {
  value: string
  name:string
}


const searchSchema = z.object({
  category: z.string().optional(),
  page: z.coerce.number().min(1).default(1),
  order: z.string().optional().default('desc')
})

export const Route = createFileRoute('/posts/')({
  validateSearch: searchSchema,

  loaderDeps: ({ search }) => ({
    
  category: search.category ?? undefined,
  page: search.page,
  order: search.order 
}),


           

loader: async ({ deps: { category, page, order} }) => {
  const [response, categoriesResponse] = await Promise.all([
    strapiAPI.posts.getAllPostsData({ data: { page, category, order } }),
    strapiAPI.posts.getAllCategories(),
  ])

  return {
    posts: response.data,
    pagination: response.meta.pagination,
    categories: categoriesResponse.data,
    
    
  }
},

  component: PostsPage,
})

function PostsPage() {
  const { posts, categories, pagination } = Route.useLoaderData()
  const { category, page = 1, order } = Route.useSearch()
  const navigate = useNavigate()

  const orderValues: Array<IOrder> = [
    {
      value: 'desc',
      name: 'newest'
    }, 
    {
      value: 'asc',
      name: 'older'
    }
  ]

  

  return (
    <>
      <div className="flex gap-2 mt-2">
        
          <div
            className={`cursor-pointer  ${!category ? "font-bold" : ""}`}
            onClick={() => navigate({ to: '/posts', search: () => ({ category: undefined, page: 1 } ) })}
          >
            All
          </div>
          <div className="flex-1 flex gap-2 flex-wrap">
          {categories.map((item, index) => (
            <Badge
              variant={`${category === item.name ? "surface" : "outline"}`}
              key={index}
              className={`cursor-pointer ${category === item.name ? "font-bold" : ""}`}
              onClick={() => navigate({ to: '/posts', search:  (prev) => ({ ...prev, category: item.name, page: 1 }),  })}
            >
              {item.name}
            </Badge>
          ))}
          </div>
        {orderValues.map((item, index) => (<Badge 
        key={index} className={`cursor-pointer max-h-fit ${order === item.value ? 'bg-purple-300' : 'bg-white'} `} onClick={() => navigate({ to: '/posts', search: (prev) => ({...prev, order: item.value, page: 1})})}>
          {item.name.charAt(0).toUpperCase() + item.name.slice(1)} 
        
        </Badge>))}
        <div>
          
        </div>
      </div>
      <div className="flex justify-center">
        {/* Pagination */}
      { pagination && pagination.pageCount > 1 && (
        <div className="flex items-center gap-4 mt-6">
          <Badge>
          <Link
            to="/posts"
            search={(prev) => ({ ...prev, page: page - 1 })}
            disabled={page <= 1}
            className={page <= 1 ? "opacity-50 pointer-events-none" : ""}
          >
            Previous
          </Link>
          </Badge>

          <span>
            Page {page} of {pagination.pageCount}
          </span>
          <Badge>
          <Link
            to="/posts"
            search={(prev) => ({ ...prev, page: page + 1 })}
            disabled={page >= pagination.pageCount}
            className={page >= pagination.pageCount ? "opacity-50 pointer-events-none" : ""}
          >
            Next
          </Link>
          </Badge>
        </div>
      )}
      </div>

      <div className="w-full flex flex-wrap pt-2 items-center gap-3 mt-5">
        {posts.map((post) => (
          <PostCard key={post.documentId} {...post} />
        ))}
      </div>

      
    </>
  )
}