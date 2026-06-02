import { createFileRoute } from '@tanstack/react-router'
import { strapiAPI } from '@/data/server-functions'
import { PostDetail } from '@/components/custom/posts-detail'
import { IPostDetail } from '@/components/custom/posts-detail'
import { frontEndUrl } from '@/lib/utils'


type PostLoaderData = {
  post: IPostDetail
  siteUrl: string
  slug: string
}

export const Route = createFileRoute('/posts/$slug')({
  loader: async ({ params }):Promise<PostLoaderData> => {
    const response = await strapiAPI.posts.getPostsBySlug(params.slug)

    const siteUrl = process.env.RAILWAY_PUBLIC_DOMAIN
      ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`
      : 'http://localhost:3000'

    return {
      post: response.data[0],
      siteUrl,
      slug: params.slug,
    }
  },

  head: ({ loaderData }) => {
    const post = loaderData?.post
    const seo = post?.seo

    const baseUrl = loaderData?.siteUrl
    const slug = loaderData?.slug

    const fullUrl = `${baseUrl}/posts/${slug}`
    
    
    
    
    

    const image =
      seo?.ogimage?.url ??
      post?.cover?.url

    return {
      meta: [
        { title: seo?.title ?? post?.title,},

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
          content: fullUrl,
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
           href: seo?.canonicalurl ?? fullUrl,
        },
      ],
    }
  },
  
  component: PostDetailPage
})


function PostDetailPage() {
  const { post }  = Route.useLoaderData()
  return <PostDetail {...post} />
}
