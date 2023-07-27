"use client"
import { useRecoilState } from "recoil"

import { recipeState } from "@/app/store/recipeState"

/**
 * マイレシピ公開状態
 * @returns
 */
const MyRecipePublishStatusLabel = () => {
  const [storedRecipe, setStoredRecipe] = useRecoilState(recipeState)

  return (
    <>
      {storedRecipe?.published_status == "public" ? (
        <div className="rounded border border-red-300 bg-white px-2 text-xs text-red-300">
          公開中
        </div>
      ) : storedRecipe?.published_status == "limited" ? (
        <div className="rounded border border-gray-300 bg-white px-2 text-xs text-gray-300">
          限定公開中
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
