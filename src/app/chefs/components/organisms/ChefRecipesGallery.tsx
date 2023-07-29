import { ChefRecipe } from "../../[screenName]/type"
import ChefRecipeCard from "./ChefRecipeCard"

type ChefRecipesGalleryProps = {
  chefRecipes: ChefRecipe[]
}

const ChefRecipesGallery = async (props: ChefRecipesGalleryProps) => {
  const { chefRecipes } = props

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {chefRecipes.map((chefRecipe) => (
          <ChefRecipeCard
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
export default ChefRecipesGallery
