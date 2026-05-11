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
}


const BlogImage = ({ className, image, rounded, border, }: BlogImageProps ) => {

    const roundedStyles: Record<NonNullable<ImageSettings['rounded']>, string> = {
        small: 'rounded-sm',
        medium: 'rounded-md',
        large: 'rounded-lg',
    }

    const borderStyle = 'border-2'

    return (
        
         
          <img className={`${className} 
          ${rounded ? roundedStyles[rounded] : ''} 
          ${border ? borderStyle : ''} `} 
          src={image.url} alt={image.alternativeText ??  ''} />
         
        
     
  )
  }

  const ImageCaption = ({ imagecaption, credit }: ImageCaptionProps) => {
  return (
    <div className="flex items-baseline gap-2 flex-wrap">
      <div className="italic font-bold text-xs sm:text-[0.78rem] break-words">
        {imagecaption}
      </div>

      <div className="text-[0.6rem] text-gray-500 italic">
        Image/{credit}
      </div>
    </div>
  )
}






export function CustomImage({
  image,
 
  settings
}: CustomImageProps) {


  
  

    const { captiontextposition, rounded, border,  } = settings ?? {}
    const imageSettings = { rounded, border, }
    const credit = settings?.credit
    
    

  
    switch (captiontextposition) {
      case 'top':
        return (
          
          <div className='flex justify-center items-center'>
            <div className='flex flex-col'>
              <ImageCaption imagecaption={image.caption} credit={credit}/>
              <BlogImage image={image} {...imageSettings} />
              
            </div>
          </div>
          
        )
        
      case 'left':
        return (
         
          <div className="flex max-w-full">
            <div className={`w-1/4 sm:w-1/3 pr-2 sm:pt-10 `}>
            <hr />
            <div className='pb-3 '></div>
              <ImageCaption imagecaption={image.caption} credit={credit} />
              <div className='pb-3'></div>
              <hr />
            </div>
            <BlogImage className="w-3/4 sm:w-2/3 object-contain" image={image} {...imageSettings} />
          </div>
         
        )
       
      case 'right':
        return (
         
          <div className='flex max-w-full'>
            <BlogImage className="w-3/4 sm:w-2/3 object-contain" image={image} {...imageSettings}  />
            <div className={`w-1/4 sm:w-1/3 pl-2 sm:pt-10 `}>
            <hr />
            <div className='pb-3 '></div>
            <ImageCaption imagecaption={image.caption} credit={credit}/>
            
            <div className='pb-3'></div>
            
            <hr />
            </div>
          </div>
        
        )
        
      case 'bottom':
        return (
        
          <div className='flex justify-center items-center '>
            <div className='flex flex-col'>
              <BlogImage image={image} {...imageSettings} />
              <ImageCaption imagecaption={image.caption} credit={credit} />
            </div>
          </div>
        
        )
        

      default:
         return <BlogImage image={image} rounded={rounded} />
    }
  }

 

