"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import worksheet from "@/assets/images/navbarImages/worksheet.png"
import { navbartopics } from "@/mockdata/navbardata/navbartopics"
import slugify from "slugify"

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="flex flex-row items-center justify-between flex-wrap bg-gray-900 p-6 px-10 w-full">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href={"/"}>
          <Image
            src={worksheet}
            alt="app logo"
            width={40}
            height={40}
            className="max-h-20 object-cover"
          />
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className="block lg:hidden">
        <button
          className="text-gray-300 hover:text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Close Menu Button */}
      {isMenuOpen && (
        <button
          className="absolute top-4 right-4 text-gray-900 hover:text-black lg:hidden"
          onClick={closeMenu}
        >
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path
              fillRule="evenodd"
              d="M10 8.586L16.95 1.636a1 1 0 0 1 1.415 1.415L11.414 10l6.95 6.95a1 1 0 0 1-1.415 1.415L10 11.414l-6.95 6.95a1 1 0 1 1-1.415-1.415L8.586 10 1.636 3.05A1 1 0 0 1 3.05 1.636L10 8.586z"
            />
          </svg>
        </button>
      )}

      {/* Topics */}
      <div
        className={`${
          isMenuOpen
            ? "lg:hidden absolute bg-gray-900 w-screen h-screen top-0 left-0 z-10"
            : "hidden lg:flex lg:flex-row items-start justify-between"
        } lg:flex lg:flex-row lg:items-center `}
        onClick={closeMenu}
      >
        <div
          className={`${
            isMenuOpen
              ? "flex flex-col items-start justify-center h-full px-6"
              : "flex flex-row items-center justify-between lg:space-x-4"
          }`}
        >
          {navbartopics.map((topic) => (
            <Link
              key={topic.id}
              href={`/topics/${slugify(topic.topicName, { lower: true })}`}
              className="text-gray-300 hover:text-white mb-4"
            >
              {topic.topicName}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default TopNav
