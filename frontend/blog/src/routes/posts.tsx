import { createFileRoute } from "@tanstack/react-router";
import { strapiAPI } from "@/data/server-functions";
import { PostCard } from "@/components/custom/posts-card";


export const Route = createFileRoute('/posts')({
  loader: async () => {
    const response = await strapiAPI.posts.getAllPostsData()
    return { posts: response.data }  
  },
  component: PostsPage
})

function PostsPage() {
  const { posts } = Route.useLoaderData()

  return (
    <div className="w-full flex flex-wrap pt-2 justify-center items-center gap-3">
      {posts.map((post) => (
        <PostCard key={post.documentId} {...post} />
      ))}
    </div>
  )
}