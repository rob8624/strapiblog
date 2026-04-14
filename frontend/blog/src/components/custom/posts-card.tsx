import { Link } from "@tanstack/react-router"
import { Card } from "../retroui/Card"
import type { IPostDetail } from "./posts-detail"
import { formatDate } from "@/lib/utils"
import { FaRegHandPointRight } from "react-icons/fa";



export function PostCard({ ...post }: IPostDetail) {

  const formattedDate = () => formatDate(post.createdAt)
  return (
    
      // <Card className="w-full sm:basis-[calc(50%-2rem)] shrink-0 flex flex-col rounded-sm">
      //   <Card.Header>
      //     <Card.Title className="text-head flex flex-col">
      //       <div className="text-sm">{post.createdAt}</div>
      //       <div className="p-2 bg-primary w-fit rounded-2xl shadow-sm">{post.title}</div>
      //       <Link to="/posts/$slug" params={{ slug : post.slug ?? '' }}>
      //         <div>Read</div>
      //       </Link>
      //     </Card.Title>
      //     {post.cover?.url && (
      //      
      //     )}
      //     <Card.Description className="line-clamp-2">
      //       {post.excerpt}
      //       {post.categories?.map(item => item.name)}
      //     </Card.Description>
      //   </Card.Header>
      // </Card>
    <Link to="/posts/$slug" params={{ slug : post.slug ?? '' }}
    className="grid grid-cols-3 bg-gray-100 p-3 gap-3 rounded-lg w-full sm:basis-[calc(50%-2rem)] max-h-fit overflow-hidden relative">
      
           <img
              src={post.cover?.formats?.thumbnail?.url}
              alt={post.title}
              className="object-contain rounded-lg h-40"
            />
          <div className="col-span-2 flex flex-col gap-2">
            <div>
           <div className="text-xs inline-block">{post.author?.name} | </div>
           <div className="inline-block text-xs">{formattedDate()}</div> 
           </div>
           <div className="font-head">{post.title}</div>
           <div>{post.excerpt}</div>  
           <div className="flex gap-3 text-xs">
            <div>{post.categories?.length ? post.categories.map(item => item.name).join(', ') : 'blog'}</div>
            <div>{post.reading_time} readtime</div>
           </div>
          </div>
          <div className="absolute top-1 right-1"><FaRegHandPointRight /></div>
     </Link>
   
  )
}