"use client"
import useGetRecipe from "@/app/hooks/useGetRecipe"

import { RecipeOutlineType } from "../../[id]/type"
import ImageWithBlurType from "../../commonComponents/molecules/ImageWithBlur"
import Modal from "../../commonComponents/organisms/Modal"
import PageBackButton from "../../commonComponents/organisms/PageBackButton"
import RecipeOutlineMenus from "./RecipeOutlineMenus"
import RecipeOutlineSkeletons from "./RecipeOutlineSkeletons"
import RecipeOutlineSubInfomations from "./RecipeOutlineSubInfomations"

type RecipeOutlinesProps = {
  watchId: string
}

/**
 * レシピ概要
 * @returns
 */
const RecipeOutlines = async (props: RecipeOutlinesProps) => {
  const { watchId } = props
  const { data, isLoading, error } = useGetRecipe(watchId)

  if (isLoading) {
    return <RecipeOutlineSkeletons />
  }

  /* レシピが取得できなかった場合 */
  if (!data || error) {
    return (
      <>
        <RecipeOutlineSkeletons />
        <div className="w-full">
          <Modal isOpen={true}>
            <>
              <div className="m-2 flex flex-col items-center justify-center">
                <div className="m-2 text-xl">レシピがありません</div>
                <div className="mt-2">
                  <PageBackButton>
                    <div className="rounded bg-blue-400 px-2 py-1 text-white hover:bg-blue-500">
                      戻る
                    </div>
                  </PageBackButton>
                </div>
              </div>
            </>
          </Modal>
        </div>
      </>
    )
  }
  const recipe: RecipeOutlineType = data

  return (
    <>
      <div className="w-full">
        {/* レシピ画像 */}
        <ImageWithBlurType src={recipe.imageUrl} alt={recipe.title} />
      </div>
      <div className="p-4">
        <div className="mb-1 flex flex-row">
          {/* レシピタイトル */}
          <div className="flex items-center text-2xl font-bold">
            {recipe.title}
          </div>

          {/* 編集メニュー */}
          <div className="ml-auto flex">
            <RecipeOutlineMenus
              watchId={watchId}
              recipe={recipe}
              links={recipe.links}
            />
          </div>
        </div>

        {/* レシピ説明 */}
        <div className="mb-4 h-full">{recipe.description}</div>

        {/* レシピサブ情報 */}
        <RecipeOutlineSubInfomations watchId={watchId} recipe={recipe} />
      </div>
    </>
  )
}
export default RecipeOutlines
