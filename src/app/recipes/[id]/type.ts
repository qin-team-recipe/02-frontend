export type RecipeOutlineType = {
  id: number
  title: string
  description: string
  servings: number
  is_draft: boolean
  isPublished: boolean // TODO
  favorites_count: number
  imageUrl?: string // TODO
  chef: {
    id: number
    screenName: string
    display_name: string
    description: string
    recipes_count: number
    follows_count: number
    is_following: boolean
    chefImageUrl?: string
    chef_links?: []
  }
}

export type RecipeCookingProcessType = {
  title: string
  description?: string
  stepNumber: number
}

export type RecipeIngredientType = {
  serving: string
  ingredientList: {
    id: number
    name: string
    description: string
  }[]
}
