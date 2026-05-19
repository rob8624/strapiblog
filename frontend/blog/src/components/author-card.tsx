import type { IAuthor } from "@/types";




export function AuthorCard({...props}: Readonly<IAuthor> ) {
   
    return (
        <>
       <div className="h-8 flex items-center gap-1">
            <img className="h-full w-auto rounded-2xl" src={props.avatar?.url} />
            <span className="text-xs font-head whitespace-nowrap">{props.name}</span>
            
    </div>
        </>
    )

}