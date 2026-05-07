import type { IAuthor } from "@/types"
import { formatDate } from "@/lib/utils"

interface PostHeaderProps {
  title?: string
  excerpt?: string
  publishedAt?: string
  author?: IAuthor
}

export function PostHeader({ title, excerpt, publishedAt, author }: PostHeaderProps) {
  return (
    <header className="flex flex-col justify-center items-center text-center">
      <h1 className="font-head text-2xl sm:text-3xl pt-5">{title}</h1>
      <p className="text-sm">{excerpt}</p>
      <div className="flex gap-2 pt-5 items-center">
        <div className="text-md">Published on {formatDate(publishedAt)}</div>
        <div>by {author?.name}</div>
        <img src={author?.avatar?.formats?.thumbnail?.url} alt={title} className="w-7 rounded-full"/>
      </div>
    </header>
  )
}