"use client"
import React from "react"

type MyRecipePublishStatusLabelProps = {
  publishedStatus: string
}

/**
 * マイレシピ公開状態
 * @returns
 */
const MyRecipePublishStatusLabel = (props: MyRecipePublishStatusLabelProps) => {
  const { publishedStatus } = props
  return (
    <>
      {publishedStatus == "open" ? (
        <div className="rounded border border-red-300 bg-white px-2 text-xs text-red-300">
          公開中
        </div>
      ) : (
        <div className="rounded border border-gray-300 bg-white px-2 text-xs text-gray-300">
          非公開
        </div>
      )}
    </>
  )
}
export default MyRecipePublishStatusLabel
