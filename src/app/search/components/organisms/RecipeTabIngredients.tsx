import { IoCartOutline } from "react-icons/io5"

//import { dummyRecipeIngredientList } from "../../[id]/mock"
import { RecipeIngredientType } from "../../[id]/type"
import RecipeAddCartButton from "./RecipeAddCartButton"
import { getRecipeData } from "./RecipeOutlines"
import RecipeTabCard from "./RecipeTabCard"

type RecipeTabIngredientsProps = {
  watchId: string
}

/**
 * レシピ材料データ取得
 * @param id
 * @returns
 */
const getRecipeIngredientsData = async (
  id: string
): Promise<RecipeIngredientType[] | undefined> => {
  console.log("レシピ材料データ取得 id=" + id)

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/recipeIngredients?recipe_id=${id}`,
      {
        next: { revalidate: 10 },
      }
    )
    const result = await response.json()
    console.log("レシピ材料データ取得結果 data=" + JSON.stringify(result))
    return result.data
  } catch (error) {
    console.error(error)
    return []
  }
}

/**
 * レシピタブ材料コンテンツ
 * @param props
 * @returns
 */
const RecipeTabIngredients = async (props: RecipeTabIngredientsProps) => {
  const { watchId } = props
  const recipe = await getRecipeData(watchId)
  if (!recipe) return <></>
  const recipeId = String(recipe.id)

  const ingredients = await getRecipeIngredientsData(recipeId)
  const serving = recipe.servings

  if (!ingredients || ingredients.length == 0) {
    return (
      <>
        <div className="w-full p-4">
          <div className="flex flex-row justify-center">
            <div className="m-10 text-xl">シェフが登録されていません</div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="flex w-full flex-col ">
        <div className="mt-4 flex h-8 flex-row">
          {/* 材料分量 */}
          <p className="ml-4 text-xl font-bold">{serving}人前</p>

          {/* まとめてお買い物に追加 */}
          <span className="ml-auto mr-4">
            <RecipeAddCartButton ingredientList={ingredients}>
              <div className="text-md text-gray flex flex-row items-center">
                <IoCartOutline />
                まとめてお買い物に追加
              </div>
            </RecipeAddCartButton>
          </span>
        </div>

        {/* 材料リスト */}
        {ingredients.map((item, i) => (
          <RecipeTabCard
            key={i}
            mainMessage={item.name}
            subMessage={item.description}
            rightItem={
              <RecipeAddCartButton ingredientList={[item]}>
                <IoCartOutline />
              </RecipeAddCartButton>
            }
          />
        ))}
      </div>
    </>
  )
}
export default RecipeTabIngredients
