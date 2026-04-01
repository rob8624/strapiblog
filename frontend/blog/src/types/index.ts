

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

export interface HomePage {
  id: number
  Hero: Array<{ id: number; Text: string }>
  Footer: { id: number; Text: string }
  envUrl: string
}

export interface FooterData {
  text: string | undefined
}
