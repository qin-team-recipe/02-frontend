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
  recipe_id: number
  recipe: RecipeOutlineType
  imageSrc: string //TODO 暫定
}
