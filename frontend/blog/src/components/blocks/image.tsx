import { CustomImage } from "../custom/custom-image"
import type { CloudinaryImage } from "@/types/cloudinary"

export interface ImageSettings  {
    captiontextposition? : 'top' | 'left' | 'right' | 'bottom'
    rounded?: 'small' | 'medium' | 'large'
    border?: boolean
    credit: string | undefined
}


export interface IImage {
    __component : "blocks.image"
    id: number
    image: CloudinaryImage
    captionposition?: "top" | "left" | "right" | "bottom" | undefined
    settings?: ImageSettings
}

export function ImageBlock({image, captionposition, settings}: Readonly<IImage>) {
 
  return (
  
    <CustomImage image={image} captionposition={captionposition} settings={settings} />
   
  )
}
    