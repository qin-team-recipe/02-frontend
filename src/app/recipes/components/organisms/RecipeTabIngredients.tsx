import { IoCartOutline } from "react-icons/io5"

import { dummyRecipeIngredientList } from "../../[id]/mock"
import { RecipeIngredientType } from "../../[id]/type"
import RecipeAddCartButton from "./RecipeAddCartButton"
import RecipeTabCard from "./RecipeTabCard"

type RecipeTabIngredientsProps = {
  id: string
  serving: string
}

/**
 * シピ材料データ取得
 * @param id
 * @returns
 */
const getRecipeIngredientsData = async (
  id: string
): Promise<RecipeIngredientType[] | undefined> => {
  console.log("レシピ材料データ取得 id=" + id)

  // const response = await fetch(
  //   `http://localhost:3000/api/recipes/${id}/ingredients`,
  //   {
  //     next: { revalidate: 10 },
  //   }
  // );
  // const data = await response.json();
  // console.log("レシピ材料データ取得結果 data=" + JSON.stringify(data));
  // return data;

  // ダミーデータ
  const dummy = dummyRecipeIngredientList.find(
    (item) => item.recipeId === Number(id)
  )
  return dummy?.ingredientList
}

/**
 * レシピタブ材料コンテンツ
 * @param props
 * @returns
 */
const RecipeTabIngredients = async (props: RecipeTabIngredientsProps) => {
  const { id, serving } = props
  const ingredient = await getRecipeIngredientsData(id)

  if (!ingredient) {
    return (
      <>
        <div className="w-full p-4">
          <div className="flex flex-row justify-center">
            <div className="m-10 text-xl">材料が登録されていません</div>
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
          <p className="ml-4 text-xl font-bold">{serving}</p>

          {/* まとめてお買い物に追加 */}
          <span className="ml-auto mr-4">
            <RecipeAddCartButton ingredientList={ingredient}>
              <div className="text-md text-gray flex flex-row items-center">
                <IoCartOutline />
                まとめてお買い物に追加
              </div>
            </RecipeAddCartButton>
          </span>
        </div>

        {/* 材料リスト */}
        {ingredient.map((item, i) => (
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
