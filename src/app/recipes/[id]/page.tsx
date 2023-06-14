import { Suspense } from "react"

import LoadingSpinner from "../../components/recipes/molecules/LoadingSpinner"
import RecipeOutlines from "../../components/recipes/organisms/RecipeOutlines"
import RecipeTabs from "../../components/recipes/organisms/RecipeTabs"

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
            <RecipeTabs id={params.id} />
          </Suspense>
        </div>
      </main>
    </>
  )
}
export default Recipes
