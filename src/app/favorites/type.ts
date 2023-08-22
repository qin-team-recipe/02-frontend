import { ChefOutlineType, PageInfoType } from "../chefs/[screenName]/type"
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

export type FavoriteChef = {
  id: number
  user_id: number
  chef_id: number
  chef: ChefOutlineType
  imageSrc: string
}

export type ChefFollowDataType = {
  lists: FavoriteChef[]
  page_info: PageInfoType
}
