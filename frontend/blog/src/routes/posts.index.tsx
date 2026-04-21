import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { z } from 'zod'
import { strapiAPI } from "@/data/server-functions";
import { PostCard } from "@/components/custom/posts-card";
import { Badge } from "@/components/retroui/Badge";

interface Category {
  id: number
  documentId: string
  name: string
}

type PostsSearch = {
  category?: string
  page? : number
}

const searchSchema = z.object({
  category: z.string().optional(),
  page: z.coerce.number().min(1).default(1),
})

export const Route = createFileRoute('/posts/')({
  validateSearch: searchSchema,

  loaderDeps: ({ search }) => ({
    
  category: search.category ?? undefined,
  page: search.page,
}),


           

  loader: async ({ deps: { category, page } }) => {
    
    const response = await strapiAPI.posts.getAllPostsData( { data: {page, category} })
    const seen = new Set<string>()
    const categories: Array<Category> = response.data
      .flatMap((post) => post.categories || [])
      .filter((cat: Category) => {
        if (seen.has(cat.documentId)) return false
        seen.add(cat.documentId)
        return true
      })

    const posts = response.data

    const pagination =  response.meta.pagination

    return { posts, categories, pagination }
  },

  component: PostsPage,
})

function PostsPage() {
  const { posts, categories, pagination } = Route.useLoaderData()
  const { category, page = 1 } = Route.useSearch()
  const navigate = useNavigate()

  return (
    <>
      <div className="flex gap-2 mt-2">
        <div
          className={`cursor-pointer ${!category ? "font-bold" : ""}`}
          onClick={() => navigate({ to: '/posts', search: () => ({ category: undefined, page: 1 } ) })}
        >
          All
        </div>
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