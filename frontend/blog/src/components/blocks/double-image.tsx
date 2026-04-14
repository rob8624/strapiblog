import type { CloudinaryImage } from "@/types/cloudinary"

export interface IDoubleImage {
    __component : "blocks.double-image"
    id: string
    caption?: string
    images : Array<CloudinaryImage>
}

export function DoubleImage({images}: Readonly<IDoubleImage>) {
        return (
            <div className="columns-2">{images.map(item => 
               <div className="flex justify-center">
                <img className=" max-h-80" src={item.formats?.medium?.url} />
               </div>
        )}</div>
        )
}