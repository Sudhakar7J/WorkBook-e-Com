import { tagdata } from "@/mockdata/topicsdata/topictagdata"
import TopicTag from "./TopicTag"

export default function TopicTagsContainer() {
  return (
    <main>
      {/* Topic Tag Section  */}
      <section>
        <div className="px-10 justify-start flex flex-wrap">
          {tagdata.map((tag) => (
            <TopicTag key={tag.id} topicTagName={tag.topicTagName} />
          ))}
        </div>
      </section>
    </main>
  )
}
