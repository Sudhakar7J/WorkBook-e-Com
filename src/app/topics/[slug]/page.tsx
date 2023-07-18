import React from "react"
import TopicTagContainer from "@/components/topicsComponents/TopicTagContainer"

export default function TopicsBar() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <TopicTagContainer />
    </main>
  )
}
