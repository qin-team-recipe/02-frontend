export type ChefOutlineType = {
  title: string
  description: string
  followerCount?: number
  imageUrl?: string
  isMyFavorite: boolean
  isFamousChef: boolean
  recipeCount: number
  userId: number
}

export type RecipeImage = {
  id: number
  name: string
  description: string
  path: string
  favoriteCount: number
}
