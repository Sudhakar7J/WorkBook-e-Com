import React from "react"
import { worksheetcard } from "@/mockdata/topicsdata/worksheetcarddata"
import Image from "next/image"
import { FaDownload, FaShoppingCart, FaShareAlt } from "react-icons/fa"

const WorkSheetCard = () => {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-10 mx-auto">
      {worksheetcard.map((card) => (
        <div
          key={card.id}
          className="bg-slate-400 p-4 shadow-xl rounded-lg mx-auto relative"
        >
          <div className="flex justify-center">
            <Image
              src={card.imagePreview}
              alt="Worksheet Preview"
              width={100}
              height={100}
              className="mx-auto items-center justify-center shadow-xl cursor-pointer"
            />
          </div>
          <h3 className="text-xl font-bold mt-4 text-black cursor-pointer">
            {card.WorkSheetCardTitle}
          </h3>
          <p className="mt-2 text-black cursor-pointer">
            {card.WorkSheetCardDescription}
          </p>
          <div className="absolute bottom-4 right-4 flex gap-2">
            <FaDownload className="text-blue-600 text-xl cursor-pointer" />
            <FaShoppingCart className="text-gray-600 text-xl cursor-pointer" />
            <FaShareAlt className="text-green-600 text-xl cursor-pointer" />
          </div>
        </div>
      ))}
    </main>
  )
}

export default WorkSheetCard
