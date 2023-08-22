"use client"
import { ChefRecipe, ChefRecipeDataType } from "@/app/chefs/[screenName]/type"
import useFetchWithAuth from "@/app/hooks/useFetchWithAuth"
import { Carousel } from "@/app/recipes/commonComponents/molecules/Carousel"
import RecipeCard from "@/app/recipes/commonComponents/organisms/RecipeCard"

import FavoriteChefNewRecipesCarouselSkeletons from "./FavoriteChefNewRecipesCarouselSkeletons"

const FavoriteChefNewRecipesCarousel = () => {
  // TODO 暫定的にレシピ全体を取得
  const { data, isLoading, error, isAuthError } =
    useFetchWithAuth("/chefRecipes")

  if (isLoading) {
    return <FavoriteChefNewRecipesCarouselSkeletons />
  }
  if (!data || error) {
    return <>データ取得に失敗しました</>
  }
  const responseData: ChefRecipeDataType = data

  const chefRecipes: ChefRecipe[] = responseData.lists ?? []
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
      {/* レシピリスト */}
      <Carousel>
        {chefRecipesWithDummy.map((chefRecipe: ChefRecipe) => (
          <RecipeCard
            key={chefRecipe.id}
            recipeId={chefRecipe.recipe_id}
            watchId={chefRecipe.recipe.watch_id}
            title={chefRecipe.recipe.title}
            description={chefRecipe.recipe.description}
            imageSrc={chefRecipe.imageSrc}
            imageSize={128}
            favoriteCount={chefRecipe.recipe.favorites_count}
          />
        ))}
      </Carousel>
    </>
  )
}
export default FavoriteChefNewRecipesCarousel
