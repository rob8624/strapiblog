import { useEffect, useState } from 'react'
import { Menu } from './menu'
import type { HeaderData } from '@/types'
import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa'
import { isTemplateExpression } from 'typescript'


interface HeaderProps {
  header: HeaderData
}


const icons = {
  'facebook' : FaFacebook,
  'github' : FaGithub,
  'twitter' : FaTwitter,
  'instagram' : FaInstagram
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
 
   const SocialLinks = () => {
  return (
    <>
      {header.social_links.map((item) => {
        const Icon = icons[item.platform]

        return (
         
           <a
  key={item.platform}
  href={
    item.url.startsWith('http')
      ? item.url
      : `https://${item.url}`
  }
  target="_blank"
  rel="noopener noreferrer"
>
  <Icon />
</a>
           
       
        )
      })}
    </>
  )
}
  
  
  
  
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
  <div className='flex gap-2'>
 <SocialLinks />
 </div>
  <nav>
    <Menu items={header.link} className={`pt-5 flex gap-2 mb-2`} />
  </nav>
</div>
  

      
   
  )
}