import { createServerFn } from "@tanstack/react-start"
import { sdk } from "../strapi-sdk"




const posts = sdk.collection('posts')

function getPosts() {
  return posts.find({
    fields: ['title', 'slug', 'excerpt', 'createdAt', 'publishedAt', 'reading_time'],
    sort: ['publishedAt:desc'],
    populate: {
      cover: true,
      
      categories:{
        fields: ['name']
      },
      blocks: {
        populate: '*'
      },
      author: {
        fields: ['name', 'bio', 'email'],
        populate: {
          avatar: true
        }
      }
    }
  })
}

export const getAllPostsData = createServerFn({method:'GET'}).handler(async () => {
    const response = await getPosts()
    console.log(JSON.stringify(response, null, 2))
    return response
})


export function getRecentPosts() {
  return posts.find({
    sort: ['publishedAt:desc'],
    pagination: { limit: 3 },
    populate: {
      cover: true,
      categories:{
        fields: ['name']
      },
      author: {
        fields: ['name', 'bio', 'email'],
        populate: {
          avatar: true
        }
      }
      
    }
  })
}


export function getPostsBySlug(slug: string) {
  return posts.find({
    filters: { slug: { $eq: slug } },
    populate: {
      cover: true,
      categories:{
        fields: ['name']
      },
      blocks: {
        populate: '*'
      }
    }
  })
}




