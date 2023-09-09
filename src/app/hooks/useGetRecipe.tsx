import { RecipeOutlineType } from "../recipes/[id]/type"
import useFetchWithAuth from "./useFetchWithAuth"

const useGetRecipe = (watchId: string) => {
  const { data, isLoading, error } = useFetchWithAuth(`/recipes/${watchId}`)

  if (!isLoading && data) {
    const recipe: RecipeOutlineType = data
    const dummyData = {
      ...recipe,
      imageUrl: "/takada-images/new-recipes/recipe1.jpg",
      chef: {
        ...recipe.chef,
        imageUrl: "/takada-images/chefs/chef2.jpg",
      },
      links: [
        {
          id: 1,
          service_name: "YouTube",
          url: "http://www.youtube.com/",
          chef_id: 0,
          recipe_id: 0,
        },
        {
          id: 2,
          service_name: "Twitter",
          url: "http://www.twitter.com/",
          chef_id: 0,
          recipe_id: 0,
        },
        {
          id: 3,
          service_name: "Instagram",
          url: "http://www.instagram.com/",
          chef_id: 0,
          recipe_id: 0,
        },
        {
          id: 4,
          service_name: "Facebook",
          url: "http://www.facebook.com/",
          chef_id: 0,
          recipe_id: 0,
        },
        {
          id: 5,
          service_name: "ほげほげ.com",
          url: "http://www.hogehoge.com/",
          chef_id: 0,
          recipe_id: 0,
        },
      ],
    }

    return { data: dummyData, isLoading, error }
  }
  return { data, isLoading, error }
}

export default useGetRecipe
