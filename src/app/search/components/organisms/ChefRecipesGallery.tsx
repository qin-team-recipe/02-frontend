import { RecommendRecipesData } from "@/app/types"

import RecipeCard from "../../../recipes/commonComponents/organisms/RecipeCard"

type ChefRecipesGalleryProps = {
  chefRecipes: RecommendRecipesData[]
}

const ChefRecipesGallery = async (props: ChefRecipesGalleryProps) => {
  const { chefRecipes } = props
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {chefRecipes.map((chefRecipe) => (
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
