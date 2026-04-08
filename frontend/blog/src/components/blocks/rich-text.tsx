export interface IRichText {
    __component: 'blocks.rich-text'
    id: number
    content : string
}



export function RichTextBlock({content}: Readonly<IRichText>) {
    return (<div
      className="rich-text"
      dangerouslySetInnerHTML={{ __html: content }}
    />)
}