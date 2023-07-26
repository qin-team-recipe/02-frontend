export type RecipeOutlineType = {
  id: number
  title: string
  description: string
  servings: number
  is_draft: boolean
  published_status: string
  favorites_count: number
  imageUrl?: string // TODO
  chef?: {
    id: number
    screen_name: string
    display_name: string
    description: string
    recipes_count: number
    follows_count: number
    is_following: boolean
    chefImageUrl?: string
    chef_links?: []
  }
  user?: {
    id: number
    screen_name: string
    display_name: string
    email: string
  }
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
