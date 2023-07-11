import React from "react"

import Skeleton from "@/app/recipes/commonComponents/atoms/Skeleton"

/**
 * シェフレシピタブコンテンツスケルトン
 * @returns
 */
const ChefTabRecipeSkeletons = async () => {
  const recipeImages = [1, 2, 3, 4, 5]
  return (
    <>
      {/* 工程リスト */}
      <div className="grid grid-cols-2 gap-2">
        {recipeImages.map((recipeImage, i) => (
          <div key={i}>
            <Skeleton className="m-1 h-[170px] w-[170px]"></Skeleton>
            <Skeleton className="m-1 h-10 w-[170px]"></Skeleton>
          </div>
        ))}
      </div>
    </>
  )
}
export default ChefTabRecipeSkeletons
