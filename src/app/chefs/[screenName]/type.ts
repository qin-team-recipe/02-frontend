export type ChefOutlineType = {
  title: string
  description: string
  favoriteCount?: number
  imageUrl?: string
  isMyFavorite: boolean
  isFamousChef: boolean
}

export type LinkType = {
  name: string
  type?: "YouTube" | "Instagram" | "Twitter"
  image?: string
  url: string
}
