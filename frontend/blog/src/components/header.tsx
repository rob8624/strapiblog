import { Menu } from './menu'
import type { HeaderData } from '@/types'
import { getStrapiURL } from '@/lib/utils'


interface HeaderProps {
  header: HeaderData
}

const strapiURL = getStrapiURL()

export function Header({ header }: HeaderProps) {
  
 
  return (
     
    <div className="flex flex-col sm:flex-row items-center flex-wrap">
      <img className='w-20 sm:w-40 pl-2 sm:pl-0' src={`${strapiURL}${header.logo.url}`} />
      <div className='flex flex-1 justify-start gap-3 sm:ml-[10%]'>
        <div className='flex flex-col'>
          <div className='font-head leading-tight tracking-tight text-2xl sm:text-4xl 
          text-center sm:text-left border-t-2 border-b-2 pt-2 pb-3  '>
              <span className='text-primary-foreground'>Welcome. Just a </span>
              <span className='inline-block -rotate-3 p-1 
              shadow-sm bg-primary text-accent-foreground 
              text-2xl sm:text-6xl'>Blog, </span>
              <span> about </span>
              <span className='inline-block -rotate-3 p-1 
              shadow-sm bg-primary text-accent-foreground 
              text-2xl sm:text-6xl m-2 sm:pt-0'> ...things </span>
          </div>
          <nav>
            <Menu items={header.link} />
          </nav>
         </div>
      </div>
    </div>
  )
}