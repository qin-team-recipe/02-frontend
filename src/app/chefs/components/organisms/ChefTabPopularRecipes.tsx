import React from "react"

import { popularRecipeImages } from "../../[screenName]/mock"
import { RecipeImage } from "../../[screenName]/type"
import ChefRecipesGallery from "./ChefRecipesGallery"

type ChefTabPopularRecipesProps = {
  screenName: string
}

/**
 * シェフレシピデータ取得
 * @param screenName
 * @returns
 */
const getRecipeData = async (
  screenName: string
): Promise<RecipeImage[] | undefined> => {
  console.log("シェフレシピデータ取得 screenName=" + screenName)

  // const response = await fetch(
  //   `http://localhost:3000/api/recipes/${id}/process`,
  //   {
  //     //next: { revalidate: 10 },
  //     cache: "no-store",
  //   }
  // );
  // const data = await response.json();
  // console.log("シェフレシピデータ取得結果 data=" + JSON.stringify(data));
  // return data;

  // 疑似遅延
  const _sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  await _sleep(3000)

  // ダミーデータ（暫定的にお気に入りで用意しているダミーデータを参照）
  return popularRecipeImages
}

/**
 * 新着レシピタブコンテンツ
 * @param props
 * @returns
 */
const ChefTabPopularRecipes = async (props: ChefTabPopularRecipesProps) => {
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
        <ChefRecipesGallery recipeImages={recipes} />
      </div>
    </>
  )
}
export default ChefTabPopularRecipes
