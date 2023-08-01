"use client"
import { ChefRecipe } from "@/app/chefs/[screenName]/type"
import useFetchWithAuth from "@/app/hooks/useFetchWithAuth"
import RecipeCard from "@/app/recipes/commonComponents/organisms/RecipeCard"

import FavoriteChefNewRecipesGallerySkeletons from "./FavoriteChefNewRecipesGallerySkeletons"

const FavoriteChefNewRecipesGallery = () => {
  // TODO 暫定的にレシピ全体を取得
  const { data, isLoading, error } = useFetchWithAuth(`/chefRecipes`)

  if (isLoading) {
    return <FavoriteChefNewRecipesGallerySkeletons />
  }
  if (!data || error) {
    return <>データ取得に失敗しました</>
  }
  const chefRecipes: ChefRecipe[] = data
  if (chefRecipes.length == 0) {
    return (
      <>
        <div className="w-full p-4">
          <div className="flex flex-row justify-center">
            <div className="m-10 text-sm">新着レシピがありません</div>
          </div>
        </div>
      </>
    )
  }

  const chefRecipesWithDummy = chefRecipes.map((chefRecipe: ChefRecipe) => ({
    ...chefRecipe,
    imageSrc: "/takada-images/my-recipes/recipe1.jpg",
  }))

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {chefRecipesWithDummy.map((chefRecipe: ChefRecipe) => (
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
export default FavoriteChefNewRecipesGallery
