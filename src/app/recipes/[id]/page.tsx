// eslint-disable-next-line simple-import-sort/imports
import { Suspense } from "react"

import RecipeOutlines from "../components/organisms/RecipeOutlines"
import RecipeTabCookingProcess from "../components/organisms/RecipeTabCookingProcess"
import RecipeTabIngredients from "../components/organisms/RecipeTabIngredients"
import RecipeTabs from "../components/organisms/RecipeTabs"
import RecipeOutlineSkeletons from "../components/organisms/RecipeOutlineSkeletons"
import RecipeTabCookingProcessSkeletons from "../components/organisms/RecipeTabCookingProcessSkeletons"
import RecipeTabIngredientSkeletons from "../components/organisms/RecipeTabIngredientSkeletons"

const Recipes = async ({
  params,
  searchParams,
}: {
  params: { id: string }
  searchParams: { tab: string }
}) => {
  const activeIndex = searchParams.tab ? Number(searchParams.tab) : undefined

  return (
    <>
      <main className="flex-1 overflow-hidden sm:border-x">
        {/* レシピ概要 */}
        <Suspense fallback={<RecipeOutlineSkeletons />}>
          <RecipeOutlines id={params.id} />
        </Suspense>

        {/* レシピ情報タブ */}
        <div>
          <RecipeTabs activeIndex={activeIndex}>
            {/* 作り方 */}
            <Suspense fallback={<RecipeTabCookingProcessSkeletons />}>
              <RecipeTabCookingProcess id={params.id} />
            </Suspense>

            {/* 材料 */}
            <Suspense fallback={<RecipeTabIngredientSkeletons />}>
              <RecipeTabIngredients id={params.id} />
            </Suspense>
          </RecipeTabs>
        </div>
      </main>
    </>
  )
}
export default Recipes
