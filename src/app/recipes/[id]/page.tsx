import { Suspense } from "react"

import LoadingSpinner from "../../components/molecules/LoadingSpinner"
import RecipeOutlines from "../../components/organisms/RecipeOutlines"
import RecipeTabs from "../../components/organisms/RecipeTabs"

export default function Recipes({ params }: { params: { id: string } }) {
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
