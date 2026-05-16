import { BlogImage } from "../custom/custom-image"
import type { CloudinaryImage } from "@/types/cloudinary"
import type { ImageSettings } from "./image"

interface DoubleImageItem {
  id: number
  image: CloudinaryImage
  settings?: ImageSettings
}

export interface IDoubleImage {
  __component: "blocks.double-image"
  id: string
  images: Array<DoubleImageItem>
}

export function DoubleImage({ images }: Readonly<IDoubleImage>) {
 console.log(JSON.stringify(images, null, 2)) 
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map(item => (
        <div key={item.id} className="flex justify-center">
            <div className="flex flex-col">
          <BlogImage 
            image={item.image} 
            rounded={item.settings?.rounded} 
            border={item.settings?.border} 
            
          />
          
          <div className="text-xs">
            { item.image.caption ? <div className="">{item.image.caption}</div> : null }
          {item.settings?.credit && (
  <div className="text-xs">Image/{item.settings.credit}</div>
)}
          </div>
          </div>
        </div>
        
      ))}
    </div>
  )
}