import type { FooterData } from '@/types'



interface FooterProps {
    data?: FooterData
}




export function Footer ( {data} : FooterProps) {
    if (!data) return null

    return (
        <div className='flex justify-center text-lg'>
            <div>{data.text}</div>
        </div>
      )  
}