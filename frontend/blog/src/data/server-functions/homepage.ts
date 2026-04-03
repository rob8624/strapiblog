import { createServerFn } from '@tanstack/react-start'
import { sdk } from '../strapi-sdk'
import type { Homepage, StrapiResponseSingle } from '@/types'


const getHomePage = async () =>
     sdk.single('homepage').find({populate: {hero: {populate: '*'}, info: {populate: '*'}}}) as unknown as Promise<StrapiResponseSingle<Homepage>> 

export const getHomePageData = createServerFn({method: 'GET'}).handler(async (): Promise<StrapiResponseSingle<Homepage>>   => {
    const response = await getHomePage()
    return response
}

)