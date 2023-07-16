export type RecipeOutlineType = {
  title: string
  chef: {
    chefImageUrl?: string
    chefName?: string
    screenName?: string
    userId: number
  }
  description: string
  favoriteCount?: number
  imageUrl?: string
  isMyFavorite: boolean
  isPublished: boolean
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
