
import { createServerFn } from '@tanstack/react-start'
import { sdk } from '../strapi-sdk'
import type { StrapiResponseSingle, TGlobal } from '@/types'


/**
 Fetches global site data from Strapi.*/

const getGlobal = async () => 
    sdk.single('global').find({populate: { header: { populate: '*' }, footer: {populate: '*'} }, }) as Promise<StrapiResponseSingle<TGlobal>>


export const getGlobalData = createServerFn({method:'GET'}).handler(async (): Promise<StrapiResponseSingle<TGlobal>> =>  {
    const response = await getGlobal()
    console.log(response)
    return response
})