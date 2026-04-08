import { RichTextBlock } from "./rich-text"
import { ImageBlock } from "./image"

import type { IImage } from "./image"
import type { IRichText } from "./rich-text"






export type Block = 
    | IImage
    | IRichText



interface BlockRendererProps {
    blocks: Array<Block>
}


export function BlockRenderer({blocks}: BlockRendererProps) {
    const renderBlock = (block: Block) => {
        switch(block.__component) {
            case 'blocks.rich-text':
                return <RichTextBlock {...block}/>
            case 'blocks.image':
                return <ImageBlock {...block} />
            default: return null
        }
    }

  return <div>{blocks.map((block, index) => <div key={`${block.__component}-${block.id}-${index}`}>{renderBlock(block)}</div>)}</div>
}

