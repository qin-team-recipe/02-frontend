import { RecipeImage } from "../../[screenName]/type"
import ChefRecipeCard from "./ChefRecipeCard"

type ChefRecipesGalleryProps = {
  recipeImages: RecipeImage[]
}

const ChefRecipesGallery = async (props: ChefRecipesGalleryProps) => {
  const { recipeImages } = props

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {recipeImages.map((recipeImage) => (
          <ChefRecipeCard
            key={recipeImage.id}
            recipeId={recipeImage.id}
            recipeImage={recipeImage}
            imageSize={170}
            favoriteCount={recipeImage.favoriteCount}
          />
        ))}
      </div>
    </>
  )
}
export default ChefRecipesGallery
