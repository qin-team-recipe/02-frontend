import React from "react"

import ChefRecipesGallery from "./ChefRecipesGallery"
import { getChefRecipeData } from "./ChefTabNewRecipes"

type ChefTabPopularRecipesProps = {
  screenName: string
}

/**
 * 新着レシピタブコンテンツ
 * @param props
 * @returns
 */
const ChefTabPopularRecipes = async (props: ChefTabPopularRecipesProps) => {
  const { screenName } = props
  // TODO 仮
  const recipes = await getChefRecipeData(screenName)

  if (!recipes) {
    return (
      <>
        <div className="w-full p-4">
          <div className="flex flex-row justify-center">
            <div className="m-10 text-xl">レシピが登録されていません</div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {/* レシピリスト */}
      <div className="p-2">
        <ChefRecipesGallery chefRecipes={recipes} />
      </div>
    </>
  )
}
export default ChefTabPopularRecipes
