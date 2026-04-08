import type { CloudinaryImage } from "@/types/cloudinary"


export interface IImage {
    __component : "blocks.image"
    id: number
    caption?: string
    image: CloudinaryImage
}

export function ImageBlock({image, caption}: Readonly<IImage>) {
  return (
    <figure className="">
      <img
        src={image.url}
        alt={image.alternativeText ?? caption ?? ''}
        width={image.width}
        height={image.height}
        className="w-full shadow-md"
      />
      {caption && (
        <figcaption className="text-sm text-gray-500 mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
    