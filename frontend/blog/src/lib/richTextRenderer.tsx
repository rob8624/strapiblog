import type { RichTextNode } from "@/types"


interface RichTextRendererProps {
  blocks: Array<RichTextNode>
}

export const RichTextRenderer = ({ blocks }: RichTextRendererProps) => {
  return (
    <>
      {blocks.map((block, idx) => {
        const children = block.children?.map((child, i) => {
          let content: React.ReactNode = child.text 
          if (child.bold) content = <strong key={i}>{content}</strong>
          if (child.italic) content = <em key={i}>{content}</em>
          if (child.underline) content = <u key={i}>{content}</u>
          if (child.code) content = <code key={i}>{content}</code>
          return content
        })

        switch (block.type) {
          case 'paragraph':
            return <p key={idx}>{children}</p>
          case 'heading':
            return <h2 key={idx}>{children}</h2>
          case 'link':
            return (
              <a key={idx} href={block.url} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            )
          case 'list-item':
            return <li key={idx}>{children}</li>
          case 'bulleted-list':
            return <ul key={idx}>{children}</ul>
          case 'numbered-list':
            return <ol key={idx}>{children}</ol>
          default:
            return <p key={idx}>{children}</p>
        }
      })}
    </>
  )
}
