import { ReactElement } from "react"

export type RecipeOutlineType = {
  title: string
  chef: {
    chefImageUrl?: string
    chefName: string
  }
  description: string
  favoriteCount?: number
  imageUrl?: string
  isMyFavorite: boolean
  isMyRecipe: boolean // TODO 暫定対応　本来はログインidとレシピの作成者idでマイレシピか判定する
  serving: string
}

export type RecipeTabComponent = {
  title: string
  contents: ReactElement
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
