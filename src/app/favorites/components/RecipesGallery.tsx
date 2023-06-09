import type { FC } from "react"

import { NewRecipeCard } from "../my/components/NewRecipeCard"
import type { RecipeImage } from "../type"
import { Recipe } from "./Recipe"

type RecipesGallery = {
  recipeImages: RecipeImage[]
  hasNewRecipeCard?: boolean
}

export const RecipesGallery: FC<RecipesGallery> = ({
  recipeImages,
  hasNewRecipeCard,
}) => (
  <div className="grid grid-cols-2 gap-2">
    {recipeImages.map((recipeImage) => (
      <Recipe key={recipeImage.id} recipeImage={recipeImage} imageSize={170} />
    ))}

    {hasNewRecipeCard && <NewRecipeCard />}
  </div>
)
