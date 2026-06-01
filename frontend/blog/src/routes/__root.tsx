import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { strapiAPI} from '../data/server-functions'
import { getStrapiURL } from '@/lib/utils'





import appCss from '../styles.css?url'
import type { FooterData, HeaderData } from '@/types'
import { Header } from '@/components/header'
import { Container } from '@/components/layout/container'
import { Footer } from '@/components/footer'


interface RootLoaderData {
  header: HeaderData
  title: string
  description: string
  footer: FooterData
}

const queryClient = new QueryClient()


export const Route = createRootRoute({
  loader: async () => {
    const globalData = await strapiAPI.global.getGlobalData()
    return {
      header: globalData.data.header,
      title: globalData.data.title,
      description: globalData.data.description,
      footer: globalData.data.footer,
      siteUrl: process.env.RAILWAY_PUBLIC_DOMAIN ?? 'http://localhost:3000'

    }
  },
  head: ({ loaderData }) => ({
     meta: [
    { charSet: 'utf-8' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },

    // ===== SEO defaults =====
    {
      title: loaderData?.title ?? 'Robert Melen Blog',
    },
    {
      name: 'description',
      content:
        loaderData?.description ??
        'Blog by Robert Melen about photography, coding and mountain biking',
    },

    // ===== Open Graph defaults =====
    {
      property: 'og:title',
      content: loaderData?.title ?? 'Robert Melen Blog',
    },
    {
      property: 'og:description',
      content:
        loaderData?.description ??
        'Blog by Robert Melen about photography, coding and mountain biking',
    },
    {
      property: 'og:type',
      content: 'website',
    },

    //homepage fallback only
    {
      property: 'og:url',
      content: loaderData?.siteUrl,
    },

    // fallback image (NOT dynamic header logo ideally)
    {
      property: 'og:image',
      content: `${loaderData?.siteUrl}/og-default.jpg`,
    },

    // ===== Twitter =====
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: loaderData?.title ?? 'Robert Melen Blog',
    },
    {
      name: 'twitter:description',
      content:
        loaderData?.description ??
        'Blog by Robert Melen about photography, coding and mountain biking',
    },
  ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
})



function RootDocument({ children }: { children: React.ReactNode }) {
  

  // shellComponent renders before loader completes during SSR, so data may be undefined
  // We need to handle the case where loaderData is not yet available
  let loaderData: RootLoaderData | undefined
  try {
    loaderData = Route.useLoaderData()
  } catch {
    // During initial SSR, loader data might not be available yet
    loaderData = undefined
  }

  // Provide safe defaults during SSR when loader hasn't completed yet
  const header = loaderData?.header
  const footer = loaderData?.footer
  
  

  return (
    <QueryClientProvider client={queryClient}>
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className='max-w-screen min-h-dvh flex flex-col'>
        <div className=" bg-white flex justify-center h-full">
          <Container>
            
            {header && <Header header={header}/>}
            <div className='flex justify-center'>
            
            </div>
              <div className='flex-1'>
                {children}
              </div>
            <Footer data={footer}/>
          </Container>

        </div>
        
        <Scripts />
      </body>
    </html>
    </QueryClientProvider>
  )
}
