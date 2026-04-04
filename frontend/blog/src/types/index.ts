import type { CloudinaryImage } from "./cloudinary"

export interface StrapiResponseSingle<T> {
  data: T
  meta: {}
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



