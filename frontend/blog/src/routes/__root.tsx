import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { strapiAPI} from '../data/server-functions'





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

export const Route = createRootRoute({
  loader: async () => {
    const globalData = await strapiAPI.global.getGlobalData()
    return {
      header: globalData.data.header,
      title: globalData.data.title,
      description: globalData.data.description,
      footer: globalData.data.footer

    }
  },
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
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
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="max-w-screen h-dvh bg-white flex justify-center">
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
  )
}
