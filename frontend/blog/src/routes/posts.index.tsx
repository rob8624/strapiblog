import { createFileRoute, useNavigate } from "@tanstack/react-router";
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
}

export const Route = createFileRoute('/posts/')({
  validateSearch: (search: Record<string, unknown>): PostsSearch => ({
    category: typeof search.category === "string" ? search.category : undefined,
  }),

  loaderDeps: ({ search }) => ({ category: search.category }),

  loader: async ({ deps: { category } }) => {
    const response = await strapiAPI.posts.getAllPostsData()

    const seen = new Set<string>()
    const categories: Array<Category> = response.data
      .flatMap((post) => post.categories || [])
      .filter((cat: Category) => {
        if (seen.has(cat.documentId)) return false
        seen.add(cat.documentId)
        return true
      })

    const posts = category
      ? response.data.filter((post) =>
          post.categories?.some((cat: Category) => cat.name === category)
        )
      : response.data

    return { posts, categories }
  },

  component: PostsPage,
})

function PostsPage() {
  const { posts, categories } = Route.useLoaderData()
  const { category } = Route.useSearch()
  const navigate = useNavigate()

  return (
    <>
      <div className="flex gap-2 mt-2">
        <div className={`cursor-pointer ${!category ? "font-bold" : ""}`} onClick={() => navigate({ to: '/posts', search: (): PostsSearch => ({ category: undefined }) })}>
          All
        </div>
        {categories.map((item, index) => (
          <Badge variant={`${category === item.name ? "surface" : "outline"}`}
            key={index} className={`cursor-pointer ${category === item.name ? "font-bold" : ""}`}
            onClick={() => navigate({ to: '/posts', search: (): PostsSearch => ({ category: item.name }) })}
          >
            {item.name}
          </Badge>
        ))}
      </div>
      <div className="w-full flex flex-wrap pt-2 items-center gap-3 mt-5">
        {posts.map((post) => (
          <PostCard key={post.documentId} {...post} />
        ))}
      </div>
    </>
  )
}