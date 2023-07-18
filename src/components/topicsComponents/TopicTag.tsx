import { tagdata, topiccontent } from "@/mockdata/topicsdata/topictagdata"

export default function TopicTag() {
  return (
    <main className="px-10 justify-center">
      {/* Tags Section */}
      <section>
        {tagdata.map((tag) => (
          <div
            key={tag.id}
            className={`py-3 px-4 text-xs rounded-lg inline-block text-center ${tag.className} my-2 mx-2 align-baseline font-bold uppercase leading-none cursor-pointer`}
          >
            {tag.topicTagName}
          </div>
        ))}
      </section>
      {/* Content Section   */}
      <section>
        {topiccontent.map((content) => (
          <div key={content.id} className="py-8 mx-auto">
            <h1 className="text-4xl font-bold mb-2">
              {content.topicMainContent}
            </h1>
            <p className="text-md ">{content.topicDescription}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
