import { useCallback, useEffect, useState } from "react"

import RecipeTabCard from "./RecipeTabCard"

type RecipeTabIngredientsProps = {
  id: string
}
type RecipeIngredientType = {
  ingredientList: {
    name: string
    description: string
  }[]
  serving: string
}

/**
 * レシピタブ材料コンテンツ
 * @param props
 * @returns
 */
export default async function RecipeTabIngredients(
  props: RecipeTabIngredientsProps
) {
  const { id } = props
  const [ingredient, setIngredient] = useState<RecipeIngredientType>({
    ingredientList: [],
    serving: "",
  })
  useEffect(() => {
    const getRecipeIngredientsData = async () => {
      console.log("レシピ材料データ取得 id=" + id)
      // const response = await fetch(
      //   `http://localhost:3000/api/recipes/${id}/ingredients`,
      //   {
      //     next: { revalidate: 10 },
      //   }
      // );
      // const data = await response.json();
      // console.log("レシピ材料データ取得結果 data=" + JSON.stringify(data));

      // ダミーデータ
      const data = {
        ingredientList: [
          {
            name: "キャベツ",
            description: "5～6枚",
          },
          {
            name: "レタス",
            description: "5～6枚",
          },
          {
            name: "はくさい",
            description: "5～6枚",
          },
        ],
        serving: "2人前",
      }

      setIngredient(data)
    }

    if (id) getRecipeIngredientsData()
  }, [id])

  /**
   * 買い物リストに追加クリック
   */
  const handleAddToCartClick = useCallback((ingredient: { name: string }) => {
    alert(`買い物リストに「${ingredient.name}」を追加`)
  }, [])

  /**
   * まとめて追加クリック
   */
  const handleAddAllToCartClick = useCallback(
    (ingredientList: { name: string; description: string }[]) => {
      const ingredientNames = ingredientList.map((item) => item.name).join("\n")
      alert(`まとめて買い物リストに追加\n` + ingredientNames)
    },
    []
  )

  return (
    <>
      <div className="flex flex-col w-full ">
        <div className="flex flex-row h-8 mt-4">
          {/* 材料分量 */}
          <p className="font-bold text-xl ml-4">{ingredient.serving}</p>

          {/* まとめてお買い物に追加 */}
          <span className="ml-auto mr-4">
            <button
              onClick={() => handleAddAllToCartClick(ingredient.ingredientList)}
            >
              <p className="text-md text-gray">まとめてお買い物に追加</p>
            </button>
          </span>
        </div>

        {/* 材料リスト */}
        {ingredient.ingredientList.map((item, i) => (
          <RecipeTabCard
            key={i}
            mainMessage={item.name}
            subMessage={item.description}
            rightItem={
              <button onClick={() => handleAddToCartClick(item)}>🛒</button>
            }
          />
        ))}
      </div>
    </>
  )
}
