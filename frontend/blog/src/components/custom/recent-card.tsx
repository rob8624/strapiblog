import { Link } from '@tanstack/react-router'
import { Card } from '../retroui/Card'
import { AuthorCard } from '../author-card'
import type { IPostDetail } from './posts-detail'

export function RecentCard({ ...post }: IPostDetail) {
  const formatted = new Date(post.createdAt ?? '').toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <>
      <div>
        <Card className="grid grid-cols-4 grid-rows-2 max-h-40 min-h-40 ">
          <Card.Header className="bg-[#C4A1FF] row-span-2 col-span-2 font-head break-word line-clamp-3 overflow-hidden rounded-r-sm">
            <span
              className="block wrap-break-word text-black"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 5,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {post.title}
            </span>
          </Card.Header>
          <div className="col-span-2 row-span-2">
            <div
              className="p-1"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 5,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              "{post.excerpt}"
            </div>
          </div>
        </Card>

        <div className="flex mt-1 text-xs items-center gap-1">
          
          <div>{formatted}</div>
        </div>
      </div>
    </>
  )
}
