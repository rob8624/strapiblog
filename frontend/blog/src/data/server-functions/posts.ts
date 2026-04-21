import { createServerFn } from "@tanstack/react-start"
import { redirect } from '@tanstack/react-router'
import { sdk } from "../strapi-sdk"




const posts = sdk.collection('posts')
const categories = sdk.collection('categories')

function getPosts(page: number = 1, category?: string ) {
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
      },
     
    },
     pagination: {
        page: page,
        pageSize: 3
      },

   ...(category && {
      filters: {
        categories: {
          name: {
            $eq: category
          }
        }
      }
    }),
   
  })
}

export const getAllPostsData = createServerFn({method:'GET'})
.inputValidator((data: { page: number | undefined, category: string | undefined }) => data)
.handler(async ({data}) => {
    const page = data.page ?? 1
    const response = await getPosts(page, data.category)
    

    const pagination = response.meta.pagination

    if (!pagination) {
      throw new Error('No pagination data returned from Strapi')
    }

    const { pageCount } = pagination

    if (page > pageCount || page < 1) {
      throw redirect({ to: '/posts', search: { page: 1 } })
    }

   

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



export const getAllCategories = createServerFn({ method: 'GET' })
  .handler(async () => {
    return categories.find({
      fields: ['name', 'documentId'],
      filters: {
        posts: {
          id: {
            $notNull: true
          }
        }
      }
    })
  })

   



