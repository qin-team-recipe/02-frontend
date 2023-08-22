import { RecipeOutlineType } from "@/app/recipes/[id]/type"
import { LinkType } from "@/app/recipes/commonComponents/organisms/LinkIcons"

export type ChefOutlineType = {
  id: number
  screen_name: string
  display_name: string
  description: string
  chef_links: LinkType[]
  is_following: boolean
  follows_count?: number
  recipes_count: number
  imageUrl?: string
}

export type ChefRecipe = {
  id: number
  chef_id: number
  user_id: number
  recipe_id: number
  recipe: RecipeOutlineType
  imageSrc: string //TODO 暫定
}

export type PageInfoType = {
  end_cursor: string
  has_next_page: boolean
  has_previous_page: boolean
  length: number
  start_cursor: string
}

export type ChefRecipeDataType = {
  lists: ChefRecipe[]
  page_info: PageInfoType
}
