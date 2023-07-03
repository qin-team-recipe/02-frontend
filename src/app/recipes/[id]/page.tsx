import { Suspense } from "react"

import LoadingSpinner from "../components/molecules/LoadingSpinner"
import PageBackButton from "../components/organisms/PageBackButton"
import RecipeOutlines from "../components/organisms/RecipeOutlines"
import RecipeTabCookingProcess from "../components/organisms/RecipeTabCookingProcess"
import RecipeTabIngredients from "../components/organisms/RecipeTabIngredients"
import RecipeTabs from "../components/organisms/RecipeTabs"
import { dummyRecipeDataList } from "./mock"
import { RecipeOutlineType } from "./type"

/**
 * レシピデータ取得
 * @param id
 * @returns
 */
const getRecipeData = async (
  id: string
): Promise<RecipeOutlineType | undefined> => {
  console.log("レシピデータ取得 id=" + id)

  // const response = await fetch(`http://localhost:8080/api/v1/recipes/${id}`, {
  //   next: { revalidate: 10 },
  // });
  // const data = await response.json();
  // console.log("レシピデータ取得結果 data=" + JSON.stringify(data));
  // return data;

  // ダミーデータ
  const dummy = dummyRecipeDataList.find((item) => item.recipeId === Number(id))
  return dummy?.outline
}

const Recipes = async ({ params }: { params: { id: string } }) => {
  const recipe = await getRecipeData(params.id)

  /* レシピが取得できなかった場合 */
  if (!recipe) {
    return (
      <>
        <div className="flex h-screen flex-col items-center justify-center">
          <div className="m-10 text-xl">該当するレシピがありません</div>
          <PageBackButton />
        </div>
      </>
    )
  }
  return (
    <>
      <main className="flex-1 overflow-hidden sm:border-x">
        {/* レシピ概要 */}
        <RecipeOutlines recipe={recipe} />

        {/* レシピ情報タブ */}
        <div>
          <Suspense fallback={<LoadingSpinner />}>
            <RecipeTabs>
              {/* 作り方 */}
              <RecipeTabCookingProcess id={params.id} />
              {/* 材料 */}
              <RecipeTabIngredients id={params.id} serving={recipe.serving} />
            </RecipeTabs>
          </Suspense>
        </div>
      </main>
    </>
  )
}
export default Recipes
