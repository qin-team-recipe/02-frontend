import React from "react"

import { ChefRecipe, ChefRecipeDataType } from "../../[screenName]/type"
import { getChefData } from "./ChefOutlines"
import ChefRecipesGallery from "./ChefRecipesGallery"

/**
 * シェフレシピデータ取得
 * @param screenName
 * @returns
 */
export const getChefNewRecipeData = async (
  screenName: string
): Promise<ChefRecipe[] | undefined> => {
  console.log("シェフレシピデータ取得 screenName=" + screenName)

  const chef = await getChefData(screenName)
  if (!chef?.id) {
    return
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/chefRecipes?type=latest&chef_id=${chef?.id}`,
    {
      next: { revalidate: 10 },
    }
  )

  const result = await response.json()
  if (!result?.data) {
    return
  }
  const responseData: ChefRecipeDataType = result.data

  // TODO 画像はダミー
  const dummyData = await responseData.lists.map((chefRecipe: ChefRecipe) => ({
    ...chefRecipe,
    imageSrc: "/takada-images/my-recipes/recipe1.jpg",
  }))
  return dummyData
}

type ChefTabNewRecipesProps = {
  screenName: string
}
/**
 * 新着レシピタブコンテンツ
 * @param props
 * @returns
 */
const ChefTabNewRecipes = async (props: ChefTabNewRecipesProps) => {
  const { screenName } = props
  const recipes = await getChefNewRecipeData(screenName)

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
export default ChefTabNewRecipes
