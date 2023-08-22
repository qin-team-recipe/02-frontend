"use client"
import { ChefRecipe, ChefRecipeDataType } from "@/app/chefs/[screenName]/type"
import useFetchWithAuth from "@/app/hooks/useFetchWithAuth"
import RecipeCard from "@/app/recipes/commonComponents/organisms/RecipeCard"
import { getLoginUserFromLocalStorage } from "@/app/utils/localStorage"

import FavoriteRecipesGallerySkeletons from "./FavoriteRecipesGallerySkeletons"

const FavoriteRecipesGallery = () => {
  const loginUser = getLoginUserFromLocalStorage()
  const { data, isLoading, error, isAuthError } = useFetchWithAuth(
    `/recipeFavorites?user_id=${loginUser.id}`
  )

  if (isLoading) {
    return <FavoriteRecipesGallerySkeletons />
  }
  if (error || !data) {
    return <>データ取得に失敗しました</>
  }
  const responseData: ChefRecipeDataType = data

  const favoriteRecipes: ChefRecipe[] = responseData.lists ?? []
  if (favoriteRecipes.length == 0) {
    return (
      <>
        <div className="w-full p-4">
          <div className="flex flex-row justify-center">
            <div className="m-10 text-sm">お気に入りレシピがありません</div>
          </div>
        </div>
      </>
    )
  }

  // TODO 画像はダミー
  const favoriteRecipesWithDummy = favoriteRecipes.map(
    (chefRecipe: ChefRecipe) => ({
      ...chefRecipe,
      imageSrc: "/takada-images/my-recipes/recipe1.jpg",
    })
  )
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {favoriteRecipesWithDummy.map((chefRecipe: ChefRecipe) => (
          <RecipeCard
            key={chefRecipe.id}
            recipeId={chefRecipe.recipe_id}
            watchId={chefRecipe.recipe.watch_id}
            title={chefRecipe.recipe.title}
            description={chefRecipe.recipe.description}
            imageSrc={chefRecipe.imageSrc}
            imageSize={170}
            favoriteCount={chefRecipe.recipe.favorites_count}
          />
        ))}
      </div>
    </>
  )
}
export default FavoriteRecipesGallery
