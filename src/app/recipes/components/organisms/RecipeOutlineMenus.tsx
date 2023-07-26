"use client"
import {
  getLoginUserFromLocalStorage,
  getTokenFromLocalStorage,
} from "@/app/utils/localStorage"

import { RecipeOutlineType } from "../../[id]/type"
import LinkIcons, { LinkType } from "../../commonComponents/organisms/LinkIcons"
import RecipeEditMenu from "./RecipeEditMenu"

type RecipeOutlineMenusProps = {
  recipe?: RecipeOutlineType
  links?: LinkType[]
}
/**
 * レシピ概要メニュー
 * @returns
 */
const RecipeOutlineMenus = (props: RecipeOutlineMenusProps) => {
  const { recipe, links } = props

  const loginUser = getLoginUserFromLocalStorage()
  const token = getTokenFromLocalStorage()

  if (!recipe) return <></>

  // ログインユーザとレシピの作成者が同じ場合はマイレシピ
  const isMyRecipe = token && loginUser?.screenName == recipe.chef?.screen_name

  return (
    <>
      {isMyRecipe ? (
        <RecipeEditMenu publishedStatus={recipe.published_status} />
      ) : (
        links && <LinkIcons links={links} />
      )}
    </>
  )
}
export default RecipeOutlineMenus
