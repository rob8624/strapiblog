import { BlockRenderer } from "../blocks/block-renderer"
import { PostHeader } from "./post-components/posts-header"
import { PostCategories } from "./post-components/post-categories"
import type { CloudinaryImage } from "@/types/cloudinary"
import type { IAuthor } from "@/types"
import { formatDate } from "@/lib/utils"


export interface IPostDetail {
  documentId?: string
  title?: string
  slug? : string
  excerpt?: string
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
  cover?: CloudinaryImage
  blocks?: Array<any>
  categories?: Array<ICategory>
  author?: IAuthor
  reading_time?: string
}

export interface ICategory {
  id: string 
  documentId: string 
  name : string
}

export function PostDetail(props: IPostDetail) {
    console.log("post detail props log", props)
    console.log(JSON.stringify(props.blocks, null, 2))
  return (
    <article className="w-full">
      <PostHeader title={props.title} excerpt={props.excerpt}
        publishedAt={props.publishedAt}
        author={props.author} />
      
      <PostCategories categories={props.categories} />
      
      
      
   
       {props.blocks && props.blocks.length > 0 && (
        <BlockRenderer blocks={props.blocks} />
      )}
      
    </article>
  )
}