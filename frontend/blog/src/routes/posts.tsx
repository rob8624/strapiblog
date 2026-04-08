import { createFileRoute } from "@tanstack/react-router";
import { strapiAPI } from "@/data/server-functions";
import { PostCard } from "@/components/custom/posts-card";


export const Route = createFileRoute('/posts')({
  loader: async () => {
    const response = await strapiAPI.posts.getAllPostsData()
    return { posts: response.data }  // flatten the Strapi wrapper
  },
  component: PostsPage
})

function PostsPage() {
  const { posts } = Route.useLoaderData()

  return (
    <div className="flex flex-col gap-5">
      {posts.map((post) => (
        <PostCard key={post.documentId} {...post} />
      ))}
    </div>
  )
}