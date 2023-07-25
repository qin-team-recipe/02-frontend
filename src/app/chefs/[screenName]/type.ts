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
  //isFamousChef: boolean
  //userId: number
}

export type RecipeImage = {
  id: number
  name: string
  description: string
  path: string
  favoriteCount: number
}
