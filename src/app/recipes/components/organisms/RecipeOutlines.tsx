import { dummyRecipeDataList } from "../../[id]/mock"
import { RecipeOutlineType } from "../../[id]/type"
import FavoriteCounterLabel from "../molecules/FavoriteCounterLabel"
import ImageWithBlurType from "../molecules/ImageWithBlur"
import Modal from "./Modal"
import PageBackButton from "./PageBackButton"
import RecipeChefAvatorButton from "./RecipeChefAvatorButton"
import RecipeEditMenu from "./RecipeEditMenu"
import RecipeFavoriteButton from "./RecipeFavoriteButton"
import RecipeOutlineSkeletons from "./RecipeOutlineSkeletons"

/**
 * レシピデータ取得
 * @param id
 * @returns
 */
const getRecipeData = async (
  id: string
): Promise<RecipeOutlineType | undefined> => {
  console.log(new Date().toLocaleString() + " レシピデータ取得 id=" + id)

  // const response = await fetch(`http://localhost:8080/api/v1/recipes/${id}`, {
  //   next: { revalidate: 10 },
  // })
  // const data = await response.json()
  // console.log("レシピデータ取得結果 data=" + JSON.stringify(data))
  // return data

  // 疑似遅延
  const _sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  await _sleep(2000)

  console.log(new Date().toLocaleString() + " レシピデータ取得完了")

  // ダミーデータ
  const dummy = dummyRecipeDataList.find((item) => item.recipeId === Number(id))
  return dummy?.outline
}

type RecipeOutlinesProps = {
  id: string
}

/**
 * レシピ概要
 * @returns
 */
const RecipeOutlines = async (props: RecipeOutlinesProps) => {
  const { id } = props
  const recipe = await getRecipeData(id)

  /* レシピが取得できなかった場合 */
  if (!recipe) {
    return (
      <>
        <RecipeOutlineSkeletons />
        <div className="w-full">
          <Modal isOpen={true}>
            <>
              <div className="m-2 flex flex-col items-center justify-center">
                <div className="m-2 text-xl">レシピがありません</div>
                <div className="mt-2">
                  <PageBackButton />
                </div>
              </div>
            </>
          </Modal>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="w-full">
        {/* レシピ画像 */}
        <ImageWithBlurType src={recipe.imageUrl} alt={recipe.title} />
      </div>
      <div className="p-4">
        <div className="flex flex-row">
          {/* レシピタイトル */}
          <div className="mb-2 text-2xl font-bold">{recipe.title}</div>

          {/* 編集メニュー（マイレシピのみ表示）*/}
          {recipe.isMyRecipe && (
            <div className="ml-auto">
              <RecipeEditMenu />
            </div>
          )}
        </div>

        {/* レシピ説明 */}
        <div className="mb-4 h-full">{recipe.description}</div>

        {/* シェフ */}
        <div className="flex flex-row items-center">
          {/* アバター */}
          <RecipeChefAvatorButton
            src={recipe.chef.chefImageUrl}
            name={recipe.chef.chefName}
            isMyRecipe={recipe.isMyRecipe}
          />

          {/* お気に入り件数 */}
          <FavoriteCounterLabel className="ml-4" count={recipe.favoriteCount} />
        </div>

        {/* お気に入りボタン（マイレシピ以外表示）*/}
        <div>
          {!recipe.isMyRecipe && (
            <RecipeFavoriteButton
              className="mt-2"
              isMyFavorite={recipe.isMyFavorite}
            />
          )}
        </div>
      </div>
    </>
  )
}
export default RecipeOutlines
