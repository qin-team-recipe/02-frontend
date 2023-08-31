import { atom } from "recoil"

import { ChefsData, RecipesData } from "@/app/types"

export const searchChefState = atom<ChefsData[]>({
  key: "searchChefState",
  default: [],
})
export const searchRecipeState = atom<RecipesData[]>({
  key: "searchRecipeState",
  default: [],
})
