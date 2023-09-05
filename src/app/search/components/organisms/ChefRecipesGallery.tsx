"use client"
import { useRecoilValue } from "recoil"

import { searchRecipeState } from "@/app/store/searchListState"
import { RecipesData } from "@/app/types"

import RecipeCard from "../../../recipes/commonComponents/organisms/RecipeCard"

type ChefRecipesGalleryProps = {
  chefRecipes: RecipesData[]
}

const ChefRecipesGallery = async (props: ChefRecipesGalleryProps) => {
  const { chefRecipes } = props
  // 検索後のレシピ一覧がある場合、そのレシピ一覧を表示
  const searchRecipeLists = useRecoilValue(searchRecipeState)
  console.log(searchRecipeLists)

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {searchRecipeLists.length > 0
          ? searchRecipeLists.map((chefRecipe) => (
              <RecipeCard
                key={chefRecipe.id}
                recipeId={chefRecipe.id}
                watchId={chefRecipe.watch_id}
                title={chefRecipe.title}
                description={chefRecipe.description}
                // imageSrc={chefRecipe.imageSrc}
                imageSize={170}
                favoriteCount={chefRecipe.favorites_count}
              />
            ))
          : chefRecipes.map((chefRecipe) => (
              <RecipeCard
                key={chefRecipe.id}
                recipeId={chefRecipe.id}
                watchId={chefRecipe.watch_id}
                title={chefRecipe.title}
                description={chefRecipe.description}
                // imageSrc={chefRecipe.imageSrc}
                imageSize={170}
                favoriteCount={chefRecipe.favorites_count}
              />
            ))}
      </div>
    </>
  )
}
export default ChefRecipesGallery
