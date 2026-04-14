import { createFileRoute } from '@tanstack/react-router'
import { strapiAPI } from '@/data/server-functions'
import { PostDetail } from '@/components/custom/posts-detail'

export const Route = createFileRoute('/posts/$slug')({
  loader: async ({params}) => {
    const response = await strapiAPI.posts.getPostsBySlug(params.slug)
   
    return response.data[0]
  },
  component: PostDetailPage
})


function PostDetailPage() {
  const post  = Route.useLoaderData()
  return <PostDetail {...post} />
}
