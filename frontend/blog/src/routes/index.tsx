// routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'
import { indexPageData } from '@/data/strapi-data'
import { Container } from '@/components/layout/container'

export interface StrapiImage {
  id: number
  url: string
  alternativeText: string | null
  width: number
  height: number
}

export interface NavLink {
  id: number
  Label: string
  URL: string
}

export interface HomePage {
  id: number
  Header: {
    id: number
    Logo: StrapiImage
    Link: Array<NavLink>
  }
  Hero: Array<{ id: number; Text: string }>
  Footer: { id: number; Text: string }
}




export const Route = createFileRoute('/')({
  loader: () => indexPageData(), // call it directly in the loader
  component: App,
})

function App() {
  const data = Route.useLoaderData()
  const page = data.raw?.data

  return (
      <Container>
         <header className="">
        <Container>
          <nav className="flex items-center">
              
              <img className="w-20 sm:w-40" src={`${data.envUrl}${page?.Header?.Logo?.url}`} />
               <div className='flex flex-1 justify-center gap-2'>
                 {page?.Header.Link.map((item:NavLink) => (
                    <div>{item.Label}</div>
                 ))}
               </div>
          
            
           
          </nav>
        </Container>
      </header>
        <div className="text-black">
          <h1>Testing Strapi Connection</h1>
          <p><strong>API URL:</strong> {data.envUrl}</p>
          <p><strong>Has Data:</strong> {String(data.hasData)}</p>
          <pre className='whitespace-pre-wrap text-wrap text-xs'>{JSON.stringify(data.raw, null, 2)}</pre>
        </div> 
      </Container>
    
  )
}