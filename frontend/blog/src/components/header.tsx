import { Menu } from './menu'
import type { HeaderData } from '@/types'
import { getStrapiURL } from '@/lib/utils'


interface HeaderProps {
  header: HeaderData
}

const strapiURL = getStrapiURL()

export function Header({ header }: HeaderProps) {
  
 
  return (
     
    
      
      
    <div className='flex flex-col'>
  <div className='flex items-center   py-2 gap-4'>
    
    {/* logo */}
    <img className='w-40 sm:w-60 shrink-0' src={`${strapiURL}${header.logo.url}`} />
    
    {/* text */}
    <div className='font-head leading-tight tracking-tight text-2xl sm:text-4xl flex flex-wrap'>
      <span className='text-primary-foreground'>Just a </span>
      <span className='inline-block -rotate-3 p-1 sm:relative static ml-2 mr-2 bottom-6 shadow-sm bg-primary text-accent-foreground text-2xl sm:text-6xl'>Blog</span>
      <span> about, </span>
      <span className='inline-block -rotate-3 p-1 shadow-sm bg-primary text-accent-foreground text-2xl sm:text-6xl m-2'> ...things </span>
    </div>

  </div>
  <nav>
    <Menu items={header.link} />
  </nav>
</div>
      
   
  )
}