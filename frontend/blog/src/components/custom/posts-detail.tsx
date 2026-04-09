import { BlockRenderer } from "../blocks/block-renderer"
import type { CloudinaryImage } from "@/types/cloudinary"


export interface IPostDetail {
  documentId?: string
  title?: string
  slug?: string
  excerpt?: string
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
  cover?: CloudinaryImage
  blocks?: Array<any>
  categories?: Array<ICategory>
}

export interface ICategory {
  id: string 
  documentId: string 
  name : string
}

export function PostDetail(props: IPostDetail) {
    console.log('blocks:', props.blocks)
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.slug}</p>
      <p>{props.excerpt}</p>
    
       {props.blocks && props.blocks.length > 0 && (
        <BlockRenderer blocks={props.blocks} />
      )}
    </div>
  )
}