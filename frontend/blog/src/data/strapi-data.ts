
import { createServerFn } from '@tanstack/react-start'
import { getStrapiURL } from '@/lib/utils'

export const indexPageData = createServerFn({
  method: 'GET',
}).handler(async () => {
  const url = getStrapiURL()

  const res = await fetch(`${url}/api/homepage?populate[Header][populate]=*`)

  if (!res.ok) {
    throw new Error(`Strapi error: ${res.status}`)
  }

  const data = await res.json()

  return {
    envUrl: url,
    hasData: !!data?.data,
    raw: data,
  }
})