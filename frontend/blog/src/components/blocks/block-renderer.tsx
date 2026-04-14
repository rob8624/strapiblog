import { RichTextBlock } from "./rich-text"
import { ImageBlock } from "./image"
import { DoubleImage } from "./double-image"
import { Gallery } from "./gallery"

import type { IImage } from "./image"
import type { IRichText } from "./rich-text"
import type { IDoubleImage } from "./double-image"
import type { IGallery } from "./gallery"






export type Block = 
    | IImage
    | IRichText
    | IDoubleImage
    | IGallery



interface BlockRendererProps {
    blocks: Array<Block>
}


export function BlockRenderer({blocks}: BlockRendererProps) {
    const renderBlock = (block: Block) => {
        switch(block.__component) {
            case 'blocks.rich-text':
                return <RichTextBlock {...block} key={block.id}/>
            case 'blocks.image':
                return <ImageBlock {...block} key={block.id}/>
            case 'blocks.double-image':
                return <DoubleImage {...block} key={block.id} />
            case 'blocks.gallery':
                return <Gallery {...block} key={block.id} />
            default: return null
        }
    }

  return <div>{blocks.map((block, index) => <div className="mb-2" key={`${block.__component}-${block.id}-${index}`}>{renderBlock(block)}</div>)}</div>
}

