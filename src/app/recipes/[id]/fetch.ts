import {
  RecipeCookingProcessType,
  RecipeIngredientType,
  RecipeOutlineType,
} from "./type"

/**
 * レシピデータ取得
 * @param watchId
 * @returns
 */
export const getRecipeData = async (
  watchId: string
): Promise<RecipeOutlineType | undefined> => {
  console.log("レシピデータ取得 watchId=" + watchId)

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/recipes/${watchId}`,
      {
        next: { revalidate: 10 },
      }
    )
    const result = await response.json()
    //console.log("レシピデータ取得結果 result=" + JSON.stringify(result))
    if (!result?.data) return

    const resultData: RecipeOutlineType = result.data

    const dummyData = {
      ...resultData,
      imageUrl: "/takada-images/new-recipes/recipe1.jpg",
      chef: {
        ...resultData.chef,
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
    return dummyData
  } catch (error) {
    console.error(error)
    return
  }
}

/**
 * レシピ工程データ取得
 * @param watchId
 * @returns
 */
export const getRecipeProcessData = async (
  id: number
): Promise<RecipeCookingProcessType[] | undefined> => {
  console.log("レシピ工程データ取得 id=" + id)

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/recipeSteps?recipe_id=${id}`,
      {
        next: { revalidate: 10 },
      }
    )
    const result = await response.json()
    //console.log("レシピ工程データ取得結果 data=" + JSON.stringify(result))
    return result.data
  } catch (error) {
    console.error(error)
    return []
  }
}

/**
 * レシピ材料データ取得
 * @param id
 * @returns
 */
export const getRecipeIngredientsData = async (
  id: number
): Promise<RecipeIngredientType[] | undefined> => {
  console.log("レシピ材料データ取得 id=" + id)

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/recipeIngredients?recipe_id=${id}`,
      {
        next: { revalidate: 10 },
      }
    )
    const result = await response.json()
    //console.log("レシピ材料データ取得結果 data=" + JSON.stringify(result))
    return result.data
  } catch (error) {
    console.error(error)
    return []
  }
}
