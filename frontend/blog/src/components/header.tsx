import { Menu } from './menu'
import type { HeaderData } from '@/types'
import { getStrapiURL } from '@/lib/utils'


interface HeaderProps {
  header: HeaderData
}

const strapiURL = getStrapiURL()

export function Header({ header }: HeaderProps) {
  
 
  return (
     
    
      
      
    
  <div className='flex flex-col sm:flex-row sm:items-center flex-wrap py-2 gap-4 justify-between border-b-2'>
    
    {/* logo */}
    <img className='w-40 sm:w-80 shrink-0 self-center sm:self-start' src={`${strapiURL}${header.logo.url}`} />
    
    <nav>
      <Menu items={header.link} />
    </nav>
  </div>
  

      
   
  )
}