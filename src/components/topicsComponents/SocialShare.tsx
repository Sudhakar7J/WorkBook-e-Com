import { socialsharedata } from "@/mockdata/topicsdata/socialsharedata"
import Image from "next/image"
import React from "react"

export default function SocialShare() {
  return (
    <main>
      <div className="flex items-center justify-center md:block py-2 md:px-10 md:py-4">
        Share This
      </div>
      <div className="flex flex-wrap text-white py-auto px-4 md:px-10 md:mx-auto">
        {socialsharedata.map((platform) => (
          <a
            key={platform.id}
            href={platform.socialMediaLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`border border-black px-auto w-40 mx-auto my-2 md:my-auto py-auto h-10 flex items-center justify-center font-semibold uppercase text-xs ${platform.className}`}
          >
            <div className="flex flex-row items-center justify-center">
              <Image
                src={platform.socialMediaIcon}
                alt={`${platform.socialMedia} Icon`}
                className="mr-2"
                width={20}
              />
              {platform.socialMedia}
            </div>
          </a>
        ))}
      </div>
    </main>
  )
}
