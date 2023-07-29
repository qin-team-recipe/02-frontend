import React from "react"

import { ChefRecipe } from "../../[screenName]/type"
import ChefRecipesGallery from "./ChefRecipesGallery"

type ChefTabNewRecipesProps = {
  screenName: string
}

/**
 * シェフレシピデータ取得
 * @param screenName
 * @returns
 */
export const getRecipeData = async (
  screenName: string
): Promise<ChefRecipe[] | undefined> => {
  console.log("シェフレシピデータ取得 screenName=" + screenName)

  // TODO API作成前のため仮で全レシピ取得を実行
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/chefRecipes`,
    {
      next: { revalidate: 10 },
    }
  )

  const result = await response.json()
  //console.log("シェフレシピデータ取得 data=" + JSON.stringify(result))
  // TODO 画像はダミー
  const dummyData = result.data.map((chefRecipe: ChefRecipe) => ({
    ...chefRecipe,
    imageSrc: "/takada-images/my-recipes/recipe1.jpg",
  }))

  return dummyData
}

/**
 * 新着レシピタブコンテンツ
 * @param props
 * @returns
 */
const ChefTabNewRecipes = async (props: ChefTabNewRecipesProps) => {
  const { screenName } = props
  const recipes = await getRecipeData(screenName)

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
