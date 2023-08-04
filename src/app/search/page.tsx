// eslint-disable-next-line simple-import-sort/imports
import { Suspense } from "react"

import RecipeTabCookingProcess from "./components/organisms/RecipeTabCookingProcess"
import RecipeTabIngredients from "./components/organisms/RecipeTabIngredients"
import Tabs, {
  TabComponent,
} from "@/app/recipes/commonComponents/organisms/Tabs"
import RecipeTabCookingProcessSkeletons from "./components/organisms/RecipeTabCookingProcessSkeletons"
import RecipeTabIngredientSkeletons from "./components/organisms/RecipeTabIngredientSkeletons"
import Container from "@/app/components/Container"
import FooterMenu from "../components/FooterMenu"

const Recipes = async ({
  params,
  searchParams,
}: {
  params: { id: string }
  searchParams: { tab: string; userid: string }
}) => {
  const activeIndex =
    searchParams.tab === "recipe"
      ? 0
      : searchParams.tab === "chef"
      ? 1
      : undefined

  const tabComponents: TabComponent[] = [
    {
      title: "レシピ",
      contents: (
        <Suspense fallback={<RecipeTabCookingProcessSkeletons />}>
          <RecipeTabCookingProcess watchId={params.id} />
        </Suspense>
      ),
    },
    {
      title: "シェフ",
      contents: (
        <Suspense fallback={<RecipeTabIngredientSkeletons />}>
          <RecipeTabIngredients watchId={params.id} />
        </Suspense>
      ),
    },
  ]

  return (
    <>
      <Container>
        {/* レシピ情報タブ */}
        <div>
          <Tabs activeIndex={activeIndex} tabComponents={tabComponents} />
        </div>
        <div className="w-[476px]: -mx-[16px] overflow-auto border-l-2 border-r-2">
          <FooterMenu />
        </div>
      </Container>
    </>
  )
}
export default Recipes
