export type ChefProps = {
  chef_links?: [
    {
      chef_id: number
      id: number
      service_name: string
      url: string
    }
  ]
  description: string
  display_name: string
  follows_count?: number
  id: number
  imageUrl: string
  is_following?: true
  recipes_count?: number
  screen_name: string
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
