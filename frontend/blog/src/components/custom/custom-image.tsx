import type { CloudinaryImage } from '@/types/cloudinary'
import type { ImageSettings } from '../blocks/image'




type CustomImageProps = {
  image: CloudinaryImage
  caption?: string
  captionposition?: 'top' | 'left' | 'right' | 'bottom'
  settings?: ImageSettings
}

type BlogImageProps = {
  className?: string
  image: CloudinaryImage
  rounded?: ImageSettings['rounded']
  border?: ImageSettings['border']
  
  
}



type ImageCaptionProps = {
  imagecaption?: string | null
  credit?: string | undefined
  captiontextposition?: CustomImageProps['captionposition']
  captionbrackets?: boolean
}


export const BlogImage = ({ className, image, rounded, border }: BlogImageProps) => {
  const roundedStyles: Record<NonNullable<ImageSettings['rounded']>, string> = {
    small: 'rounded-sm',
    medium: 'rounded-md',
    large: 'rounded-lg',
  }

  const roundedStyle = rounded ? roundedStyles[rounded] : ''
  const borderStyle = border ? 'border-2' : ''

  return (
    
      <div className={`inline-block self-center ${className ?? ''} ${borderStyle} ${roundedStyle}`}>
        <img
          className={`block w-full  ${roundedStyle}`}
          src={image.url}
          alt={image.alternativeText ?? ''}
        />
      </div>
    
  )
}



const bracketStyling = {
   'bracketSpacing' : 'py-3 px-2',
   'brackets' : () => (
      <>
      {/* top-left corner */}
      <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-current rounded-tl-sm" />
      {/* bottom-right corner */}
      <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-current rounded-br-sm" />
      </>
   )
 }


 const ImageCaption = ({ imagecaption, credit, captiontextposition, captionbrackets }: ImageCaptionProps) => {

 const isBottom = captiontextposition === 'bottom' ? 'mt-2' : ''

 
  return (
    <>
  <div className={`relative ${captionbrackets ? bracketStyling.bracketSpacing : ''} ${isBottom}`}>
    { captionbrackets ? bracketStyling.brackets() : null }
      
      <div className="italic font-bold text-xs sm:text-[0.78rem] break-words">
        {imagecaption}
      </div>
    
    </div>
      <div className="text-[0.6rem] text-gray-500 italic max-w-fit">
        Image/{credit}
      </div>
      </>
  )

}





export function CustomImage({
  image,
 
  settings
}: CustomImageProps) {


  
  

    const { captiontextposition, rounded, border, offset, captionbrackets, } = settings ?? {}
    const imageSettings = { rounded, border, }
    const captionSettings = {captionbrackets, captiontextposition}
    const credit = settings?.credit
    
     const offsetClass = offset
    ? 'lg:-mx-24 lg:-mx-40'
    : ''

  
    switch (captiontextposition) {
      case 'top':
        return (
          
          <div className={`flex justify-center items-center ${offsetClass}`}>
            <div className='flex flex-col'>
              <ImageCaption imagecaption={image.caption} credit={credit} {...captionSettings}/>
              <BlogImage image={image} {...imageSettings} />
              
            </div>
          </div>
          
        )
        
      case 'left':
        return (
         
          <div className={`flex max-w-full ${offsetClass}`}>
            <div className={`w-1/4 sm:w-1/3 pr-2 sm:pt-10 `}>
            
            <div className='pb-3 '></div>
              <ImageCaption imagecaption={image.caption} credit={credit} {...captionSettings} />
              <div className='pb-3'></div>
             
            </div>
            <BlogImage className="w-3/4 sm:w-2/3 object-contain" image={image} {...imageSettings} />
          </div>
         
        )
       
      case 'right':
        return (
         
          <div className={`flex max-w-full ${offsetClass}`}>
            <BlogImage className="w-3/4 sm:w-2/3 object-contain" image={image} {...imageSettings}  />
            <div className={`w-1/4 sm:w-1/3 pl-2 sm:pt-10 `}>
           
            <div className='pb-3 '></div>
            <ImageCaption imagecaption={image.caption} credit={credit} {...captionSettings}/>
            
            <div className='pb-3'></div>
            
            
            </div>
          </div>
        
        )
        
      case 'bottom':
        return (
        
          <div className={`flex justify-center items-center ${offsetClass} `}>
            <div className='flex flex-col'>
              <BlogImage image={image} {...imageSettings} />
              <ImageCaption imagecaption={image.caption} credit={credit} {...captionSettings} />
            </div>
          </div>
        
        )
        

      default:
         return <BlogImage image={image} rounded={rounded} />
    }
  }

 

