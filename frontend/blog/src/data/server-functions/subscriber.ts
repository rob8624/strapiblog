import { createServerFn } from '@tanstack/react-start'
import { sdk } from '../strapi-sdk'
import type { SiteMessage, TStrapiResponseCollection } from '@/types'




const subscribers = sdk.collection('subscribers') 
const siteMessages = sdk.collection('site-messages')



const getMessage = (key : string) => {
    return siteMessages.find(
        {
            filters: {
                key: {
                    $eq: key
                }
            }
        }
    ) as unknown as Promise<TStrapiResponseCollection<SiteMessage>>
}


export const addSubscriber = createServerFn({method:'POST'})
.inputValidator((data: { email: string }) => data)
.handler(async ({data}) => {
    console.log('data received:', data) 
    const response =  await subscribers.create({
      email: data.email
    })
    console.log(response)
   
})


export const getSubscriberMessage = createServerFn({method:'GET'})
.inputValidator((data : { key : string }) => data)
.handler(async ({data}) => {
    return await getMessage(data.key)
})
