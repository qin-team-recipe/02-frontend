"use client"
import { useEffect } from "react"
import { useRecoilState } from "recoil"

import CounterLabel from "@/app/recipes/commonComponents/molecules/CounterLabel"
import { recipeState } from "@/app/store/recipeState"
import {
  getLoginUserFromLocalStorage,
  getTokenFromLocalStorage,
} from "@/app/utils/localStorage"

import { RecipeOutlineType } from "../../../recipes/[id]/type"
import MyRecipePublishStatusLabel from "./MyRecipePublishStatusLabel"
import RecipeChefAvatorButton from "./RecipeChefAvatorButton"
import RecipeEditButton from "./RecipeEditButton"
import RecipeFavoriteButton from "./RecipeFavoriteButton"

type RecipeOutlineSubInfomationsProps = {
  watchId: string
  recipe?: RecipeOutlineType
}
/**
 * レシピ概要サブ情報
 * @returns
 */
const RecipeOutlineSubInfomations = (
  props: RecipeOutlineSubInfomationsProps
) => {
  const { watchId, recipe } = props
  const [storedRecipe, setStoredRecipe] = useRecoilState(recipeState)

  const loginUser = getLoginUserFromLocalStorage()
  const token = getTokenFromLocalStorage()

  // 描画完了してからレシピ情報をrecoilに保管
  useEffect(() => recipe && setStoredRecipe(recipe), [recipe, setStoredRecipe])

  if (!recipe) return <></>
  const recipeId = String(recipe.id)

  // ログインユーザとレシピの作成者が同じ場合はマイレシピ
  const isMyRecipe = token && loginUser?.screenName == recipe.chef?.screen_name

  return (
    <>
      <div className="flex flex-row items-center">
        {isMyRecipe ? (
          <MyRecipePublishStatusLabel />
        ) : (
          <RecipeChefAvatorButton
            src={recipe.chef?.chefImageUrl}
            name={recipe.chef?.display_name}
            screenName={recipe.chef?.screen_name}
          />
        )}
        {/* お気に入り件数 */}
        <CounterLabel
          className="ml-4"
          count={recipe.favorites_count}
          label="お気に入り"
        />
      </div>

      {isMyRecipe ? (
        <div className="mt-2 flex flex-row">
          <div className="mr-2 flex-1">
            <RecipeFavoriteButton className="w-full" recipeId={recipeId} />
          </div>
          <div className="flex-1">
            <RecipeEditButton className="w-full" />
          </div>
        </div>
      ) : (
        <div className="mt-2 flex-1">
          <RecipeFavoriteButton className="w-full" recipeId={recipeId} />
        </div>
      )}
    </>
  )
}
export default RecipeOutlineSubInfomations
