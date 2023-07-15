import type { FC } from "react"

import { RecipeImage } from "../../[screenName]/type"
import { Recipe } from "./Recipe"

type RecipesGallery = {
  recipeImages: RecipeImage[]
  hasNewRecipeCard?: boolean
}

export const RecipesGallery: FC<RecipesGallery> = ({ recipeImages }) => (
  <div className="grid grid-cols-2 gap-2">
    {recipeImages.map((recipeImage) => (
      <Recipe key={recipeImage.id} recipeImage={recipeImage} imageSize={170} />
    ))}
  </div>
)
