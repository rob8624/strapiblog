import { generateHTML } from '@tiptap/html'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'

export interface IRichText {
    __component: 'blocks.rich-text'
    id: number
    content: string | object
}

export function RichTextBlock({content}: Readonly<IRichText>) {
    const parsed = typeof content === 'string' ? JSON.parse(content) : content
    const html = generateHTML(parsed, [StarterKit, Image])
    
    return (
        <div
          className="rich-text prose prose-sm max-w-none pb-5 pt-5"
          dangerouslySetInnerHTML={{ __html: html }}
        />
    )
}