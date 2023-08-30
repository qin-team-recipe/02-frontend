import { ChefOutlineType, PageInfoType } from "@/app/chefs/[screenName]/type"

import { LinkType } from "../commonComponents/organisms/LinkIcons"

export type RecipeOutlineType = {
  id: number
  watch_id: string
  title: string
  description: string
  servings: number
  is_draft: boolean
  published_status: string
  favorites_count: number
  imageUrl?: string // TODO
  chef?: ChefOutlineType
  user?: {
    id: number
    screen_name: string
    display_name: string
    email: string
  }
  links?: LinkType[]
}

export type RecipeCookingProcessType = {
  description: string
  id: number
  recipe_id: number
  step_number: number
  title: string
}

export type RecipeIngredientType = {
  id: number
  name: string
  description: string
  recipe_id: number
}

export type RecipeFavoritesDataType = {
  lists: {
    id: number
    user_id: number
    recipe_id: number
    recipe: RecipeOutlineType
  }[]
  page_info: PageInfoType
}
