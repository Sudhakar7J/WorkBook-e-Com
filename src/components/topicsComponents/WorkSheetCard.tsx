import React from "react"
import Image from "next/image"
import { FaDownload, FaShoppingCart, FaShareAlt } from "react-icons/fa"
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog"

const WorkSheetCard = ({ title, description, coverImage }: any) => {
  return (
    <div className="bg-slate-400 p-4 shadow-xl rounded-lg  relative">
      <div className="flex justify-center">
        {/* Dialog(Modal) for the image and image preview  */}
        <Dialog>
          <DialogTrigger>
            <Image
              src={coverImage}
              alt={"Worksheet Preview"}
              width={100}
              height={100}
              className="mx-auto items-center justify-center shadow-xl cursor-pointer"
            />
          </DialogTrigger>
          <DialogContent>
            <Image
              src={coverImage}
              alt="Worksheet Preview"
              width={400}
              height={200}
              className="mx-auto items-center justify-center shadow-xl cursor-pointer"
            />
          </DialogContent>
        </Dialog>
      </div>
      <h3 className="text-xl font-bold mt-4 text-black cursor-pointer">
        {title}
      </h3>
      <p className="mt-2 text-black cursor-pointer">{description}</p>
      <div className="absolute bottom-4 right-4 flex gap-2">
        <FaShareAlt className="text-green-600 text-xl cursor-pointer" />
        <FaDownload className="text-blue-600 text-xl cursor-pointer" />
        <FaShoppingCart className="text-gray-600 text-xl cursor-pointer" />
      </div>
    </div>
  )
}

export default WorkSheetCard
