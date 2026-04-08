import { createServerFn } from "@tanstack/react-start"
import { sdk } from "../strapi-sdk"
import type { TStrapiResponseCollection } from "@/types"
import type { IPostDetail } from "@/components/custom/posts-detail"




const posts = sdk.collection('posts')

function getPosts() {
  return posts.find({
    sort: ['createdAt:desc'],
    populate: {
      cover: true,
      blocks: {
        populate: '*'
      }
    }
  })
}

export const getAllPostsData = createServerFn({method:'GET'}).handler(async () => {
    const response = await getPosts()
    console.log(JSON.stringify(response, null, 2))
    return response
})
