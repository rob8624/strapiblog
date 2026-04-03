import { createFileRoute } from '@tanstack/react-router'
import { strapiAPI } from '../data/server-functions'
import { HeroSection } from '@/components/hero'
import { Info } from '@/components/info'



export const Route = createFileRoute('/')({
  loader:async () => {
    const data = await strapiAPI.homepage.getHomePageData()
    console.log(data)
    return {
      hero: data.data.hero,
      info: data.data.info
    }
  },
  component: App,
})

function App() {
  const {hero, info} = Route.useLoaderData()
  return (
    <div className="flex flex-col sm:flex-row flex-wrap mt-0 sm:mt-10 gap-10 sm:gap-3">
      <div className='flex-1'>
        <HeroSection hero={hero}/>
      </div>
      <div className='flex-1 flex justify-center'>
         <Info info={info} />
      </div>
    </div>
  )
}
