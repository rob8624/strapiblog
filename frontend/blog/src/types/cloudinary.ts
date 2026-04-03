export interface CloudinaryImage {
  id: number
  documentId: string
  name: string
  alternativeText: string | null
  caption: string | null
  width: number
  height: number
  ext: string
  mime: string
  size: number
  url: string           // full image URL
  previewUrl: string | null
  provider: string
  provider_metadata: {
    public_id: string
    resource_type: string
  }
  formats?: CloudinaryFormats // optional, may not exist
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface CloudinaryFormats {
  thumbnail?: CloudinaryThumbnail
  small?: CloudinaryThumbnail
  medium?: CloudinaryThumbnail
  large?: CloudinaryThumbnail
}

export interface CloudinaryThumbnail {
  ext: string
  url: string           // thumbnail URL
  hash: string
  mime: string
  name: string
  path: string | null
  size: number
  width: number
  height: number
  sizeInBytes: number
  provider_metadata: {
    public_id: string
    resource_type: string
  }
}