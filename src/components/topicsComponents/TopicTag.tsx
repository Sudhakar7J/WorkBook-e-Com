import { tagdata, topiccontent } from "@/mockdata/topicsdata/topictagdata"
import React from "react"

export default function TopicTag({ topicTagName }: any) {
  const tag = tagdata.find((tag) => tag.topicTagName === topicTagName)

  if (!tag) {
    return null
  }

  return (
    <main>
      {/* Tags Section */}
      <section>
        <div
          className={`py-3 px-4 text-xs rounded-lg inline-block text-center ${tag.className} my-2 mx-2 align-baseline font-bold uppercase leading-none cursor-pointer`}
        >
          {topicTagName}
        </div>
      </section>
    </main>
  )
}
