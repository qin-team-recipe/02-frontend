export type ChefCardProps = {
  image: string
  title: string
  firstName?: string
  lastName?: string
  recommend?: string
  recipeCount?: number
}
export type RecipeCardProps = {
  image: string
  title: string
  text: string
  chef: string
  good: number
  comment: number
  createdAt: string
  updatedAt: string
}
