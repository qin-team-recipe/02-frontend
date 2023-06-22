import { Suspense } from "react"

import RecipeTabCookingProcess from "@/app/recipes/components/organisms/RecipeTabCookingProcess"
import RecipeTabIngredients from "@/app/recipes/components/organisms/RecipeTabIngredients"

import LoadingSpinner from "../components/molecules/LoadingSpinner"
import RecipeOutlines from "../components/organisms/RecipeOutlines"
import RecipeTabs from "../components/organisms/RecipeTabs"

const Recipes = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <main className="flex-1 overflow-hidden sm:border-x">
        {/* レシピ概要 */}
        <div>
          <Suspense fallback={<LoadingSpinner />}>
            <RecipeOutlines id={params.id} />
          </Suspense>
        </div>

        {/* レシピ情報タブ */}
        <div>
          <Suspense fallback={<LoadingSpinner />}>
            <RecipeTabs>
              {/* 作り方 */}
              <RecipeTabCookingProcess id={params.id} />
              {/* 材料 */}
              <RecipeTabIngredients id={params.id} />
            </RecipeTabs>
          </Suspense>
        </div>
      </main>
    </>
  )
}
export default Recipes
