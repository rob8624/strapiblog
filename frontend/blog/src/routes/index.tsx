import { createFileRoute } from '@tanstack/react-router'
import { strapiAPI } from '../data/server-functions'
import { HeroSection } from '@/components/hero'
import { RecentCard } from '@/components/custom/recent-card'
import { Info } from '@/components/info'



export const Route = createFileRoute('/')({
  loader:async () => {
    const data = await strapiAPI.homepage.getHomePageData()
    
    return {
      hero: data.homepage.data.hero,
      info: data.homepage.data.info,
      recentPosts: data.recentPosts.data
    }
  },
  component: App,
})

function App() {
  const {hero, info, recentPosts} = Route.useLoaderData()
  return (
    <>
    <div className="flex flex-col sm:flex-row flex-wrap mt-0 sm:mt-10 gap-10 sm:gap-3">
      <div className='flex-1'>
        <HeroSection hero={hero}/>
      </div>
      <div className='flex-1 flex justify-center'>
         <Info info={info} />
      </div>
    
    
    </div>
     <div className='flex flex-col m-3'>
      <div className='font-head'>Recent Posts</div>
          <div className="grid gap-4 sm:grid-cols-3">
          {recentPosts.map(post => (
            <RecentCard key={post.documentId} {...post} />
          ))}
        </div>
    </div>
  </>
  )
}
