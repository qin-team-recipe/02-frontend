"use client"
import { useRecoilState } from "recoil"

import useGetRecipeSteps from "@/app/hooks/useGetRecipeSteps"
import { recipeState } from "@/app/store/recipeState"

import { RecipeCookingProcessType } from "../../[id]/type"
import ClipBoradCopyButton from "../../commonComponents/organisms/ClipBoradCopyButton"
import RecipeTabCard from "./RecipeTabCard"
import RecipeTabCookingProcessSkeletons from "./RecipeTabCookingProcessSkeletons"

/**
 * レシピタブ工程コンテンツ
 * @param props
 * @returns
 */
const RecipeTabCookingProcess = async () => {
  const [storedRecipe, _] = useRecoilState(recipeState)
  const { data, isLoading, error } = useGetRecipeSteps(storedRecipe?.id ?? 0)

  if (isLoading || !storedRecipe) {
    return <RecipeTabCookingProcessSkeletons />
  }
  if (error) {
    return (
      <div className="w-full p-4">
        <div className="flex flex-row justify-center">
          <div className="m-10 text-xl">作り方の取得に失敗しました</div>
        </div>
      </div>
    )
  }

  const process: RecipeCookingProcessType[] = data ?? []
  if (!process || process.length == 0) {
    return (
      <>
        <div className="w-full p-4">
          <div className="flex flex-row justify-center">
            <div className="m-10 text-xl">作り方が登録されていません</div>
          </div>
        </div>
      </>
    )
  }

  // TODO 暫定 クリップボードコピー文字列
  const processInfo = process.map(
    (item) => `(${item.step_number}) ${item.title} ${item.description}`
  )
  const processInfoText = processInfo.join("\r\n")
  const copyContents = `【レシピ名】${storedRecipe.title}\r\n【作り方】\r\n${processInfoText}`

  return (
    <>
      {/* 工程リスト */}
      {process.map((item, i) => (
        <RecipeTabCard
          key={i}
          number={item.step_number}
          mainMessage={item.title}
          subMessage={item.description}
        />
      ))}
      <div className="m-2 flex justify-end">
        <ClipBoradCopyButton
          contents={copyContents}
          message="作り方をコピーしました"
        />
      </div>
    </>
  )
}
export default RecipeTabCookingProcess
