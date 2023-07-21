"use client"
import React, { useEffect, useState } from "react"

export default function Breadcrumbs() {
  const [breadcrumbs, setBreadcrumbs] = useState<
    Array<{ name: string; path: string }>
  >([])

  useEffect(() => {
    const pathSegments = window.location.pathname
      .split("/")
      .filter((segment) => segment !== "")
    const breadcrumbsData = pathSegments.map((segment, index) => ({
      name: segment.charAt(0).toUpperCase() + segment.slice(1),
      path: `/${pathSegments.slice(0, index + 1).join("/")}`,
    }))
    // Add the "Home" link at the beginning of the breadcrumbsData array
    breadcrumbsData.unshift({ name: "Home", path: "/" })
    setBreadcrumbs(breadcrumbsData)
  }, [])

  return (
    <main className="px-10 py-2">
      <div className="w-auto md:h-12 h-auto bg-red-100 rounded-md md:items-center md:justify-start justify-center flex text-black px-4">
        You are currently here :
        <div className="px-2 ">
          {breadcrumbs.map((breadcrumb, index) => (
            <span key={index}>
              {index === breadcrumbs.length - 1 ? (
                // Plain text for the last breadcrumb
                <span className="font-bold">{breadcrumb.name}</span>
              ) : (
                // Hyperlink for other breadcrumbs
                <a className="underline text-red-900" href={breadcrumb.path}>
                  {breadcrumb.name}
                </a>
              )}
              {index < breadcrumbs.length - 1 ? " / " : ""}
            </span>
          ))}
        </div>
      </div>
    </main>
  )
}
