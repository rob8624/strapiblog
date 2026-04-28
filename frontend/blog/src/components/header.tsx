import { useEffect, useState } from 'react'
import { Menu } from './menu'
import type { HeaderData } from '@/types'


interface HeaderProps {
  header: HeaderData
}



export function Header({ header }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
    if (window.scrollY > 80) {
      setScrolled(true)
    } else if (window.scrollY < 40) {
      setScrolled(false)
    }
    // gap between 40-80 does nothing, prevents bouncing
  }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
 
 
  return (
     
    
      
      
    
 <div className={`
  flex flex-col sm:flex-row sm:items-center flex-wrap sm:gap-4 justify-between 
  border-b-2 sticky top-0 z-10 bg-white transition-all duration-300 ease-in-out 
  ${scrolled ? 'py-1' : 'py-4'}
`}>
  <img 
    className={`shrink-0 self-center sm:self-start transition-all duration-300 ease-in-out
      ${scrolled ? 'w-24' : 'w-40'}
    `}
    src={`${header.logo.url}`} 
  />
  <nav>
    <Menu items={header.link} className={`pt-5 flex gap-2 mb-2`} />
  </nav>
</div>
  

      
   
  )
}