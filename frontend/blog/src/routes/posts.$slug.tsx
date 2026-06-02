import { createFileRoute } from '@tanstack/react-router'
import { strapiAPI } from '@/data/server-functions'
import { PostDetail } from '@/components/custom/posts-detail'
import { IPostDetail } from '@/components/custom/posts-detail'

export const Route = createFileRoute('/posts/$slug')({
  loader: async ({params}): Promise<IPostDetail> => {
    const response = await strapiAPI.posts.getPostsBySlug(params.slug)
   
    return response.data[0]
  },

  head: ({ loaderData }) => {
    const post = loaderData
    const seo = post?.seo
    const baseURL = `https://${process.env.RAILWAY_PUBLIC_DOMAIN ?? 'localhost:3000'}`
    const url = `${baseURL}posts/${post?.slug}`

    const image =
      seo?.ogimage?.url ??
      post?.cover?.url

    return {
      meta: [
        { title: seo?.title ?? post?.title },

        {
          name: 'description',
          content: seo?.description ?? post?.excerpt,
        },

        // Open Graph
        {
          property: 'og:title',
          content: seo?.title ?? post?.title,
        },
        {
          property: 'og:description',
          content: seo?.description ?? post?.excerpt,
        },
        {
          property: 'og:image',
          content: image,
        },
        {
          property: 'og:type',
          content: 'article',
        },
        {
          property: 'og:url',
          content: url,
        },

        // Twitter
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: seo?.title ?? post?.title,
        },
        {
          name: 'twitter:description',
          content: seo?.description ?? post?.excerpt,
        },
        {
          name: 'twitter:image',
          content: image,
        },

        // Robots
        {
          name: 'robots',
          content: seo?.noindex
            ? 'noindex,nofollow'
            : 'index,follow',
        },
      ],

      links: [
        {
          rel: 'canonical',
          href: seo?.canonicalurl ?? url,
        },
      ],
    }
  },
  
  component: PostDetailPage
})


function PostDetailPage() {
  const post  = Route.useLoaderData()
  return <PostDetail {...post} />
}
