import type { NextPage } from "next"

import { RecipesGallery } from "../components/RecipesGallery"
import { SubHeader } from "../components/SubHeader"
import { myRecipeImages } from "../mock"

const Page: NextPage = () => (
  <>
    <SubHeader
      title="マイレシピ"
      link={{ href: "/favorites", text: "お気に入りレシピを見る" }}
    />
    <RecipesGallery recipeImages={myRecipeImages} hasNewRecipeCard />
  </>
)
export default Page
