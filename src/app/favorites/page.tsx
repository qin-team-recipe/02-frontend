import type { NextPage } from "next"

import { RecipesGallery } from "./components/RecipesGallery"
import { SubHeader } from "./components/SubHeader"
import { myRecipeImages } from "./mock"

const Page: NextPage = () => (
  <>
    <SubHeader
      title="お気に入りレシピ"
      link={{ href: "/favorites/my", text: "マイレシピをみる" }}
    />
    <RecipesGallery recipeImages={myRecipeImages} />
  </>
)
export default Page
