import { createServerFn } from '@tanstack/react-start'
import { sdk } from '../strapi-sdk'
import { getRecentPosts } from './posts'
import type { HomePageData, Homepage, StrapiResponseSingle } from '@/types'


const getHomePage = async () =>
     sdk.single('homepage').find({populate: {hero: {populate: '*'}, info: {populate: '*'}, news: {populate: '*'}}}) as unknown as Promise<StrapiResponseSingle<Homepage>> 

export const getHomePageData = createServerFn({method: 'GET'}).handler(async (): Promise<HomePageData>   => {
    const [homepage, recentPosts] = await Promise.all(
        [
            getHomePage(),
            getRecentPosts()
        ])
    console.log(homepage)
    return {homepage, recentPosts}
}

)