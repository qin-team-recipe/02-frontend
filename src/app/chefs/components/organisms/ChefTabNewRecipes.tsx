import React from "react"

import { RecipesGallery } from "@/app/favorites/components/RecipesGallery"
import { RecipeImage } from "@/app/favorites/type"

import { newRecipeImages } from "../../[screenName]/mock"

type ChefTabNewRecipesProps = {
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
  return newRecipeImages
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
      <RecipesGallery recipeImages={recipes} />
    </>
  )
}
export default ChefTabNewRecipes
