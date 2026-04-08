


import { Card } from "./retroui/Card"
import type { InfoSection } from "@/types"



interface InfoProps {
    info: InfoSection
}

export function Info({info}: InfoProps ) {
    return (
      <Card className="shadom-md w-[90%] relative hover:rotate-2">
        <Card.Content>
          <div className="flex flex-col">
            <div className="mb-2">
              <div
              className="prose prose-sm sm:prose lg:prose-lg rich-text"
              dangerouslySetInnerHTML={{ __html: info.text }}
            />
            </div>
            <div className="flex">
              <div>
               <div className="font-head text-sm">{info.quote}</div>
               {info.quoteAuthor}
              </div>
              <img
                className="w-20 rounded-4xl border-2 shadow-xs"
                src={info.image?.formats?.thumbnail?.url}
              />
            </div>
          </div>
        </Card.Content>
      </Card>
    )
}