import { atom } from "recoil"

import { RecipeOutlineType } from "../recipes/[id]/type"

export const recipeState = atom<RecipeOutlineType>({
  key: "recipeState",
  default: undefined,
})
