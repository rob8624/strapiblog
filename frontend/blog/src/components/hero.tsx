import { Text } from './retroui/Text'
import type { HeroSection } from '@/types'

interface HeroProps {
  hero: Array<HeroSection>
}

export function HeroSection({ hero }: HeroProps) {
  return (
    <>
      <div className="flex flex-col gap-1 sm:gap-4 justify-center items-center">
        <Text className="text-xs  pb-5 text-center">
          {hero.map((item) => item.Text)}
        </Text>
        <div className='w-2/3 sm:w-full'>
          <div className="border-2 p-1 sm:p-5 shadow-sm -rotate-2 rounded-sm bg-yellow-200 text-center">
            <div className="font-head leading-tight tracking-tight text-2xl sm:text-4xl">
                <div>
              <div className="inline-block text-primary-foreground">Just a 
              <span
                className="inline-block -rotate-3 p-1  ml-2 mr-2 bottom-6 
                    shadow-sm bg-primary text-accent-foreground text-2xl sm:text-6xl"
              >
                Blog
              </span>
              </div>
              
              <div className='inline-block'> about, </div>
              <span className="inline-block -rotate-3 p-1 shadow-sm bg-primary text-accent-foreground text-2xl sm:text-6xl m-2">
                {' '}
                ...things.{' '}
                </span>
                
               </div> 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
