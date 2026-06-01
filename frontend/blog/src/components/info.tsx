
import { generateHTML } from "@tiptap/html"
import StarterKit from "@tiptap/starter-kit"

import { Card } from "./retroui/Card"
import type { InfoSection } from "@/types"



interface InfoProps {
    info: InfoSection
}

export function Info({info}: InfoProps ) {
     
     const html = generateHTML(
  JSON.parse(info.text),
  [StarterKit]
)
     
    return (
      <Card className="shadom-md w-[90%] relative hover:rotate-2">
        <Card.Content>
          <div className="flex flex-col">
            <div className="mb-2">
             <div
  className="prose prose-sm sm:prose lg:prose-lg"
  dangerouslySetInnerHTML={{ __html: html }}
/>
            </div>asdadsadadasd
            <div className="flex">
              <div>
               <div className="font-head text-sm">{info.quote}</div>
               {info.quoteAuthor}
              
              </div>
              
              <img
                className="w-20 rounded-4xl border-2 shadow-xs"
                src={info.image?.url} alt={info.image?.alternativeText ?? 'Authur info image'}
              />
            </div>
          </div>
        </Card.Content>
      </Card>
    )
}