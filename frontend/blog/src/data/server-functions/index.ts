import { getGlobalData } from "./global"
import { getHomePageData } from "./homepage"
import { getAllCategories, getAllPostsData, getPostsBySlug } from "./posts"

/**
 * Central API object for all Strapi server functions.
 * Import this throughout the app instead of individual functions.
 * 
 * @example
 * import { strapiAPI } from '@/data/server-functions'
 * const data = await strapiAPI.global.getGlobalData()
 */


export const strapiAPI ={
    /**
   * Global data used across all pages.
   * Fetched in the root loader so it's available everywhere.
   */
    global: {
        getGlobalData
    },
    homepage: {
        getHomePageData
    },
    posts: {
       getAllPostsData,
       getPostsBySlug,
       getAllCategories
    }

}