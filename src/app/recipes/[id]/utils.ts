"use client"

import { getLoginUserFromLocalStorage } from "@/app/utils/localStorage"

import { RecipeOutlineType } from "./type"

export const canAccessRecipe = (recipe?: RecipeOutlineType): boolean => {
  if (!recipe) return false
  if (
    recipe.published_status == "public" ||
    recipe.published_status == "limited"
  ) {
    //console.log("can accesss!")
    return true
  }

  const loginUser = getLoginUserFromLocalStorage()
  if (!loginUser) return false
  if (loginUser.screen_name == recipe.user?.screen_name) {
    //console.log("can accesss my recipe!")
    return true
  }

  //console.log("can not accesss")
  return false
}
