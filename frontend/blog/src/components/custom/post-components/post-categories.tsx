import type { ICategory } from "../posts-detail";
import { Badge } from "@/components/retroui/Badge";


interface PostCategoriesProps {
    categories: Array<ICategory> | undefined;
}


export function PostCategories({categories}: PostCategoriesProps) {
    return (
        <div className="flex justify-center items-center text-center gap-2">
        {categories?.map(item => <Badge>{item.name}</Badge>)}
        </div>
    )
}