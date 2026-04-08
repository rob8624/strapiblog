
import { Card } from "../retroui/Card"
import type { IPostDetail } from "./posts-detail"


export function PostCard({ title, excerpt, cover }: IPostDetail) {
  return (
    <Card>
      {cover?.url && (
        <img 
          src={cover.url} 
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg p-2"
        />
      )}
      <Card.Header>
        <Card.Title className="text-base">{title}</Card.Title>
        <Card.Description className="line-clamp-2">
          {excerpt}
        </Card.Description>
      </Card.Header>
    </Card>
  )
}