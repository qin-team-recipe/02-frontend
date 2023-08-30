"use client"
import { RecipeCookingProcessType, RecipeOutlineType } from "../../[id]/type"
import { canAccessRecipe } from "../../[id]/utils"
import ClipBoradCopyButton from "../../commonComponents/organisms/ClipBoradCopyButton"
import RecipeTabCard from "./RecipeTabCard"

type RecipeTabProcessProps = {
  watchId: string
  recipe?: RecipeOutlineType
  process?: RecipeCookingProcessType[]
}

/**
 * レシピタブ工程コンテンツ
 * @param props
 * @returns
 */
const RecipeTabCookingProcess = async (props: RecipeTabProcessProps) => {
  const { watchId, recipe, process } = props

  const canAccess = recipe ? canAccessRecipe(recipe) : false
  if (!recipe || !canAccess) return <></>

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
  const copyContents = `【レシピ名】${recipe.title}\r\n【作り方】\r\n${processInfoText}`

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
