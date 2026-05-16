import { generateHTML } from '@tiptap/html'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import type { TipTapRichText } from "@/types"

type NewsProps = {
  data: TipTapRichText
}

export function News({ data }: NewsProps) {
  const parsed = typeof data.content === 'string' ? JSON.parse(data.content) : data.content
  const html = generateHTML(parsed, [StarterKit, Image])

  return (
    <div className='text-3xl border-2 rounded-md shadow-sm relative'>
      <div className='absolute -top-5 bg-white border-2 rounded-sm w-fit -rotate-3 shadow-xs p-1 text-sm z-10'>News</div>
      <div
        className='text-sm p-5 max-h-48 min-h-48 overflow-y-auto prose prose-sm max-w-none'
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}





