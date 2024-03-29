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
  is_following?: boolean
  recipes_count?: number
  screen_name: string
}

export type RecipeCardProps = {
  chef: {
    chef_links: {
      chef_id: number
      id: number
      service_name: string
      url: string
    }
    description: string
    display_name: string
    follows_count: number
    id: number
    is_following: boolean
    recipes_count: number
    screen_name: string
  }
  description: string
  favorites_count: number
  id: number
  is_draft: boolean
  published_status: string
  servings: number
  title: string
  user: {
    display_name: string
    email: string
    id: number
    screen_name: string
  }
  watch_id: string
}

export type ChefsData = {
  chef_links: [
    {
      chef_id: number
      id: number
      service_name: string
      url: string
    }
  ]
  description: string
  display_name: string
  follows_count: number
  id: number
  is_following: boolean
  recipes_count: number
  screen_name: string
  imageUrl?: string
}

export type RecommendChefs = {
  data: ChefsData[]
  message: string
}

export type RecipesData = {
  chef: {
    chef_links: [
      {
        chef_id: number
        id: number
        service_name: string
        url: string
      }
    ]
    description: string
    display_name: string
    follows_count: number
    id: number
    is_following: boolean
    recipes_count: number
    screen_name: string
  }
  description: string
  favorites_count: number
  id: number
  is_draft: boolean
  published_status: string
  servings: number
  title: string
  watch_id: string
}

export type RecommendRecipes = {
  data: {
    lists: RecipesData[]
    page_info: {
      end_cursor: string
      has_next_page: boolean
      has_previous_page: boolean
      length: number
      start_cursor: string
    }
  }
  message: string
}
