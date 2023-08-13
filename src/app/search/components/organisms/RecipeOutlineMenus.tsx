"use client"
import LinkIcons, {
  LinkType,
} from "@/app/recipes/commonComponents/organisms/LinkIcons"
import {
  getLoginUserFromLocalStorage,
  getTokenFromLocalStorage,
} from "@/app/utils/localStorage"

import { RecipeOutlineType } from "../../[id]/type"
import RecipeEditMenu from "./RecipeEditMenu"

type RecipeOutlineMenusProps = {
  watchId: string
  recipe?: RecipeOutlineType
  links?: LinkType[]
}
/**
 * レシピ概要メニュー
 * @returns
 */
const RecipeOutlineMenus = (props: RecipeOutlineMenusProps) => {
  const { watchId, recipe, links } = props

  const loginUser = getLoginUserFromLocalStorage()
  const token = getTokenFromLocalStorage()

  if (!recipe) return <></>

  // ログインユーザとレシピの作成者が同じ場合はマイレシピ
  const isMyRecipe = token && loginUser?.screenName == recipe.chef?.screen_name

  return (
    <>
      {isMyRecipe ? (
        <RecipeEditMenu
          watchId={watchId}
          recipeId={recipe.id}
          publishedStatus={recipe.published_status}
        />
      ) : (
        links && <LinkIcons links={links} />
      )}
    </>
  )
}
export default RecipeOutlineMenus
