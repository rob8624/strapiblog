
import { Card } from "../retroui/Card"
import type { IPostDetail } from "./posts-detail"


export function PostCard({ title, excerpt, cover, createdAt, categories }: IPostDetail) {
  return (
    <div className="w-full sm:basis-[calc(50%-0.5rem)] shrink-0 flex flex-col rounded-sm max-h-80">
      <Card>
        <Card.Header>
          <Card.Title className="text-head flex flex-col gap-2">
            <div className="text-sm">{createdAt}</div>
            <div className="p-2 bg-primary w-fit rounded-2xl shadow-sm">{title}</div>
          </Card.Title>
          {cover?.url && (
            <img
              src={cover.formats?.thumbnail?.url}
              alt={title}
              className="object-contain rounded-lg h-40"
            />
          )}
          <Card.Description className="line-clamp-2">
            {excerpt}
            {categories?.map(item => item.name)}
          </Card.Description>
        </Card.Header>
      </Card>
    </div>
  )
}