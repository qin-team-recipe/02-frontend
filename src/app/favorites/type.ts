import { RecipeOutlineType } from "../recipes/[id]/type"

export type ChefImage = {
  id: number
  name: string
  path: string
}

export type RecipeImage = {
  id: number
  name: string
  description: string
  path: string
}

export type FavoriteRecipe = {
  id: number
  chef_id: number
  recipe_id: number
  recipe: RecipeOutlineType
  imageSrc: string //TODO 暫定
}
