import React from "react"
import WorkSheetCard from "@/components/topicsComponents/WorkSheetCard"
import { topiccontent } from "@/mockdata/topicsdata/topictagdata"
import { worksheetcard } from "@/mockdata/topicsdata/worksheetcarddata"
import TopicTagsContainer from "@/components/topicsComponents/TopicTagsContainer"
import SocialShare from "@/components/topicsComponents/SocialShare"
import Breadcrumbs from "./../../../components/topicsComponents/Breadcrumbs"

export default function TopicsBar() {
  return (
    <main>
      {/* Topic Tags Section  */}
      <TopicTagsContainer />
      {/* Breadcrumbs Section  */}
      <section>
        <Breadcrumbs />
      </section>
      {/* Social Media Share Section  */}
      <section>
        <SocialShare />
      </section>
      {/* Topic Content Section  */}
      <section>
        <div className="margin-auto">
          <div key={topiccontent.id} className="py-8 mx-8">
            <h1 className="text-4xl font-bold mb-2">
              {topiccontent.topicMainContent}
            </h1>
            <p className="text-md ">{topiccontent.topicDescription}</p>
          </div>
        </div>
      </section>
      {/* WorkSheetCard Section  */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-10 mx-auto">
          {worksheetcard.map((worksheet, index) => (
            <WorkSheetCard
              key={index}
              title={worksheet.WorkSheetCardTitle}
              description={worksheet.WorkSheetCardDescription}
              coverImage={worksheet.imagePreview}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
