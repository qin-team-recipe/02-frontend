import React from "react"

import Skeleton from "@/app/recipes/commonComponents/atoms/Skeleton"

/**
 * お気に入りレシピタブコンテンツスケルトン
 * @returns
 */
const FavoriteChefNewRecipesGallerySkeletons = async () => {
  const recipeImages = [1, 2, 3, 4, 5, 6, 7]
  return (
    <>
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
export default FavoriteChefNewRecipesGallerySkeletons
