// eslint-disable-next-line simple-import-sort/imports
import { Suspense } from "react"

import RecipeOutlines from "../components/organisms/RecipeOutlines"
import RecipeTabCookingProcess from "../components/organisms/RecipeTabCookingProcess"
import RecipeTabIngredients from "../components/organisms/RecipeTabIngredients"
import Tabs, { TabComponent } from "../commonComponents/organisms/Tabs"
import RecipeOutlineSkeletons from "../components/organisms/RecipeOutlineSkeletons"
import RecipeTabCookingProcessSkeletons from "../components/organisms/RecipeTabCookingProcessSkeletons"
import RecipeTabIngredientSkeletons from "../components/organisms/RecipeTabIngredientSkeletons"

const Recipes = async ({
  params,
  searchParams,
}: {
  params: { id: string }
  searchParams: { tab: string; userid: string }
}) => {
  const activeIndex = searchParams.tab ? Number(searchParams.tab) : undefined
  const tabComponents: TabComponent[] = [
    {
      title: "作り方",
      contents: (
        <Suspense fallback={<RecipeTabCookingProcessSkeletons />}>
          <RecipeTabCookingProcess />
        </Suspense>
      ),
    },
    {
      title: "材料",
      contents: (
        <Suspense fallback={<RecipeTabIngredientSkeletons />}>
          <RecipeTabIngredients />
        </Suspense>
      ),
    },
  ]

  return (
    <>
      <main className="flex-1 overflow-hidden sm:border-x">
        {/* レシピ概要 */}
        <Suspense fallback={<RecipeOutlineSkeletons />}>
          <RecipeOutlines watchId={params.id} />
        </Suspense>

        {/* レシピ情報タブ */}
        <div>
          <Tabs activeIndex={activeIndex} tabComponents={tabComponents} />
        </div>
      </main>
    </>
  )
}
export default Recipes
