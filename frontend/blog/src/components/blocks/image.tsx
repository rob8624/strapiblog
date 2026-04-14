import type { CloudinaryImage } from "@/types/cloudinary"


export interface IImage {
    __component : "blocks.image"
    id: number
    caption?: string
    image: CloudinaryImage
}

export function ImageBlock({image, caption}: Readonly<IImage>) {
  return (
    <figure className="flex w-full justify-center">
      <img
        src={image.url}
        alt={image.alternativeText ?? caption ?? ''}
        width={image.width}
        height={image.height}
        className="w-[80%] rounded-2"
      />
      {caption && (
        <figcaption className="text-sm text-gray-500 mt-2 ">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
    