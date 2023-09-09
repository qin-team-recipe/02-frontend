"use client"
import { IoCartOutline } from "react-icons/io5"
import { useRecoilState } from "recoil"

import useGetRecipeIngredients from "@/app/hooks/useGetRecipeIngredients"
import { recipeState } from "@/app/store/recipeState"

import { RecipeIngredientType } from "../../[id]/type"
import ClipBoradCopyButton from "../../commonComponents/organisms/ClipBoradCopyButton"
import RecipeAddCartButton from "./RecipeAddCartButton"
import RecipeTabCard from "./RecipeTabCard"
import RecipeTabIngredientSkeletons from "./RecipeTabIngredientSkeletons"

/**
 * レシピタブ材料コンテンツ
 * @param props
 * @returns
 */
const RecipeTabIngredients = async () => {
  const [storedRecipe, _] = useRecoilState(recipeState)
  const { data, isLoading, error } = useGetRecipeIngredients(
    storedRecipe?.id ?? 0
  )

  if (isLoading || !storedRecipe) {
    return <RecipeTabIngredientSkeletons />
  }

  if (error) {
    return (
      <div className="w-full p-4">
        <div className="flex flex-row justify-center">
          <div className="m-10 text-xl">材料の取得に失敗しました</div>
        </div>
      </div>
    )
  }

  const ingredients: RecipeIngredientType[] = data ?? []
  if (!ingredients || ingredients.length == 0) {
    return (
      <div className="w-full p-4">
        <div className="flex flex-row justify-center">
          <div className="m-10 text-xl">材料が登録されていません</div>
        </div>
      </div>
    )
  }

  const serving = storedRecipe.servings

  // TODO 暫定 クリップボードコピー文字列
  const ingredientInfo = ingredients.map(
    (item) => `${item.name} ${item.description}`
  )
  const ingredientInfoInfoText = ingredientInfo.join("\r\n")
  const copyContents = `【レシピ名】${storedRecipe.title}\r\n【材料】(${serving}人前)\r\n${ingredientInfoInfoText}`

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
      <div className="m-2 flex justify-end">
        <ClipBoradCopyButton
          contents={copyContents}
          message="材料をコピーしました"
        />
      </div>
    </>
  )
}
export default RecipeTabIngredients
