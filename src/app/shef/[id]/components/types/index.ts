// シェフの型定義

// シェフのプロフィール
export type ChefProps = {
  id: number
  description: string
  path: string
  likes?: number
  name: string
}
// シェフのレシピ
export type ChefRecipes = {
  chefId: number
  descreption: string
  name: string
  path: string
}

export type ChefSocialLinkProps = {
  chefId: number
  twitter?: {
    userName: string
    link: string
  }
  facebook?: {
    userName: string
    link: string
  }
  instagram?: {
    userName: string
    link: string
  }
}
