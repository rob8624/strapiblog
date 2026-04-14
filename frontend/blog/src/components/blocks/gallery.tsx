import type { CloudinaryImage } from "@/types/cloudinary"

export interface IGallery {
    __component : "blocks.gallery"
    id: string
    caption?: string
    images : Array<CloudinaryImage>
}

export function Gallery({images}: Readonly<IGallery>) {
        return (

            <div className="gap-2 columns-2 sm:columns-3">
            {images.map(item => 
            
                <img className="w-full pb-1" src={item.url} />
            
        )}
        </div>
        )
}