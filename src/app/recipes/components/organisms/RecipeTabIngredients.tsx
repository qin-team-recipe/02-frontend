import { IoCartOutline } from "react-icons/io5"

import RecipeAddCartButton from "./RecipeAddCartButton"
import RecipeTabCard from "./RecipeTabCard"

type RecipeTabIngredientsProps = {
  id: string
}
type RecipeIngredientType = {
  ingredientList: {
    id: number
    name: string
    description: string
  }[]
  serving: string
}

/**
 * シピ材料データ取得
 * @param id
 * @returns
 */
const getRecipeIngredientsData = async (
  id: string
): Promise<RecipeIngredientType> => {
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
  return {
    ingredientList: [
      {
        id: 1,
        name: "キャベツ",
        description: "5～6枚",
      },
      {
        id: 2,
        name: "レタス",
        description: "5～6枚",
      },
      {
        id: 3,
        name: "はくさい",
        description: "5～6枚",
      },
    ],
    serving: "2人前",
  }
}

/**
 * レシピタブ材料コンテンツ
 * @param props
 * @returns
 */
const RecipeTabIngredients = async (props: RecipeTabIngredientsProps) => {
  const { id } = props
  const ingredient = await getRecipeIngredientsData(id)

  return (
    <>
      <div className="flex w-full flex-col ">
        <div className="mt-4 flex h-8 flex-row">
          {/* 材料分量 */}
          <p className="ml-4 text-xl font-bold">{ingredient.serving}</p>

          {/* まとめてお買い物に追加 */}
          <span className="ml-auto mr-4">
            <RecipeAddCartButton ingredientList={ingredient.ingredientList}>
              <div className="text-md text-gray flex flex-row items-center">
                <IoCartOutline />
                まとめてお買い物に追加
              </div>
            </RecipeAddCartButton>
          </span>
        </div>

        {/* 材料リスト */}
        {ingredient.ingredientList.map((item, i) => (
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
