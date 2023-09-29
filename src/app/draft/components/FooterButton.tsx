"use client"

import { useRouter } from "next/navigation"

export const FooterButtons = () => {
  const router = useRouter()
  return (
    <>
      <div className="my-2 flex justify-evenly">
        <div className="mx-3 h-[35px] w-full items-center rounded-sm bg-red-500 text-center text-[16px] text-white">
          <button className="py-1">保存する</button>
        </div>
        <div className="mr-3 h-[35px] w-full items-center rounded-sm border-2 border-red-500 text-center text-[16px] text-red-500">
          <button className="py-1">削除する</button>
        </div>
      </div>
    </>
  )
}
