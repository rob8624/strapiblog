import type { CloudinaryImage } from '@/types/cloudinary'

type CustomImageProps = {
  image: CloudinaryImage
  caption?: string
  captionposition?: 'top' | 'left' | 'right' | 'bottom'
}

type BlogImageProps = {
  className?: string
  image: CloudinaryImage
}

type ImageCaptionProps = {
  imagecaption?: string | null
}

const BlogImage = ({ className, image, }: BlogImageProps ) => {
    return (
      
        <img className={className} src={image.url} alt={image.alternativeText ??  ''} />
     
  )
  }

  const ImageCaption = ({imagecaption}: ImageCaptionProps) => {
      return (
        <div className='italic font-bold text-xs sm:text-[0.78rem] break-words'>
          {imagecaption}
        </div>
      )
  }







export function CustomImage({
  image,
  captionposition,
}: CustomImageProps) {

  


  

  
    switch (captionposition) {
      case 'top':
        return (
          
          <div className='flex justify-center items-center'>
            <div className='flex flex-col'>
              <ImageCaption imagecaption={image.caption} />
              <BlogImage image={image} />
            </div>
          </div>
          
        )
        
      case 'left':
        return (
         
          <div className="flex max-w-full">
            <div className={`w-1/4 sm:w-1/3 pr-2 sm:pt-10 `}>
            <hr />
            <div className='pb-3 '></div>
              <ImageCaption imagecaption={image.caption} />
              <div className='pb-3'></div>
              <hr />
            </div>
            <BlogImage className="w-3/4 sm:w-2/3 object-contain" image={image} />
          </div>
         
        )
       
      case 'right':
        return (
         
          <div className='flex max-w-full'>
            <BlogImage className="w-3/4 sm:w-2/3 object-contain" image={image}  />
            <div className={`w-1/4 sm:w-1/3 pl-2 sm:pt-10 `}>
            <hr />
            <div className='pb-3 '></div>
            <ImageCaption imagecaption={image.caption} />
            <div className='pb-3'></div>
            <hr />
            </div>
          </div>
        
        )
        
      case 'bottom':
        return (
        
          <div className='flex justify-center items-center '>
            <div className='flex flex-col'>
              <BlogImage image={image}  />
              <ImageCaption imagecaption={image.caption} />
            </div>
          </div>
        
        )
        

      default:
         return <BlogImage image={image} />
    }
  }

 

