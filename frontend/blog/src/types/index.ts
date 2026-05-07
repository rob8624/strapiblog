import type { CloudinaryImage } from "./cloudinary"
import type { IPostDetail } from "@/components/custom/posts-detail"

export interface StrapiResponseSingle<T> {
  data: T
  meta: {}
}

export interface HomePageData {
  homepage: StrapiResponseSingle<Homepage>
  recentPosts: TStrapiResponseCollection<IPostDetail>
}

export interface TGlobal {
  documentId: string
  title: string
  description: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  header: HeaderData
  footer: FooterData
}


export interface StrapiImage {
  id: number
  url: string
  alternativeText: string | null
  width: number
  height: number
}


export interface NavLink {
  id: number
  label: string
  url: string
}

export interface HeaderData {
  id: number
  logo: StrapiImage
  link: Array<NavLink>
  title: string
}



export interface FooterData {
  text: string | undefined
}


export interface HeroSection {
  id: number
  Text: string
}

export interface InfoSection {
  id:number
  text: string
  image?: CloudinaryImage | null
  quote: string
  quoteAuthor: string
}

export interface Homepage {
  id: number
  documentId: string
  hero: Array<HeroSection>
  info: InfoSection
}

export interface RichTextChild {
  text: string
  bold?: boolean
  italic?: boolean
  underline?: boolean
  code?: boolean
  [key: string]: any
}

export interface SiteMessage {
  id: number
  documentId: string
  key: string
  message : string
  content: string
}

export interface Subscriber {
  id: number
  documentId: string
  email: string
}







export type TStrapiResponseCollection<T> = {
  data: Array<T>
  meta?: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface IAuthor {
  id?: number
  documentId?: string
  name?: string
  bio?: string
  email?: string
  avatar?: CloudinaryImage | null
}

