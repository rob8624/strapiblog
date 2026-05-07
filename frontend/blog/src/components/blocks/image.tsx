import { CustomImage } from "../custom/custom-image"
import type { CloudinaryImage } from "@/types/cloudinary"


export interface IImage {
    __component : "blocks.image"
    id: number
    image: CloudinaryImage
    captionposition?: "top" | "left" | "right" | "bottom" | undefined
}

export function ImageBlock({image, captionposition}: Readonly<IImage>) {
 
  return (
  
    <CustomImage image={image} captionposition={captionposition} />
   
  )
}
    