


import { Card } from "./retroui/Card"
import type { InfoSection } from "@/types"
import { RichTextRenderer } from "@/lib/richTextRenderer"


interface InfoProps {
    info: InfoSection
}

export function Info({info}: InfoProps ) {
    return (
      <Card className="shadom-md w-[90%] relative hover:rotate-2">
        <Card.Content>
          <div className="flex flex-col">
            <div className="mb-2">
              <RichTextRenderer blocks={info.text} />
            </div>
            <div className="flex">
              <div>
                "The more I learn, the more I realize how much I don't know." —
                Albert Einstein
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