import type { FC } from "react"

import type { RecipeImage } from "../type"
import { Carousel } from "./Carousel"
import { Recipe } from "./Recipe"

type NewRecipesCarouselProps = {
  newRecipeImages: RecipeImage[]
}

export const NewRecipesCarousel: FC<NewRecipesCarouselProps> = ({
  newRecipeImages,
}) => (
  <Carousel>
    {newRecipeImages.map((recipeImage) => (
      <Recipe key={recipeImage.id} recipeImage={recipeImage} imageSize={128} />
    ))}
  </Carousel>
)
