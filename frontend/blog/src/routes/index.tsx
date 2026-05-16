import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

import { strapiAPI } from '../data/server-functions'

import { HeroSection } from '@/components/hero'
import { RecentCard } from '@/components/custom/recent-card'
import { Info } from '@/components/info'
import { Button } from '@/components/retroui/Button'
import { SubscribeForm } from '@/components/custom/subscribeForm'
import { News } from '@/components/news'




export const Route = createFileRoute('/')({
  loader:async () => {
    const data = await strapiAPI.homepage.getHomePageData()
    
    return {
      hero: data.homepage.data.hero,
      info: data.homepage.data.info,
      news: data.homepage.data.news,
      recentPosts: data.recentPosts.data
    }
  },
  component: App,
})

function App() {
  const {hero, info, news, recentPosts} = Route.useLoaderData()
  const [showSubscribe, setShowSubscribe] = useState<boolean>(false)


  
  return (
    <>
    <div className="flex flex-col sm:flex-row flex-wrap mt-0 sm:mt-10 gap-10 sm:gap-3">
      <div className='flex-1 flex flex-col gap-4'>
        <HeroSection hero={hero}/>
        <div className='flex  items-center justify-center mt-5'>
          { showSubscribe ? <SubscribeForm setShowSubscribe={setShowSubscribe}/> :
          <Button onClick={() => setShowSubscribe(prev => !prev)}>Subscribe</Button >
          }
        </div>
       { showSubscribe ? null : <News data={news}/>}
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
