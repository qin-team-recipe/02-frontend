"use client"
import { useEffect } from "react"

import PageBackButton from "@/app/recipes/commonComponents/organisms/PageBackButton"

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <main className="flex-1 overflow-hidden sm:border-x">
        <div className=" flex h-screen w-full flex-col items-center justify-center">
          <div className="text-xl">シェフページ作成失敗</div>
          <PageBackButton />
        </div>
      </main>
    </>
  )
}
