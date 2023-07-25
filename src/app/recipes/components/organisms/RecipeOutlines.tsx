import { dummyLinkDataList } from "@/app/chefs/[screenName]/mock"

// import { dummyRecipeDataList } from "../../[id]/mock"
import { RecipeOutlineType } from "../../[id]/type"
import CounterLabel from "../../commonComponents/molecules/CounterLabel"
import ImageWithBlurType from "../../commonComponents/molecules/ImageWithBlur"
import LinkIcons, { LinkType } from "../../commonComponents/organisms/LinkIcons"
import Modal from "../../commonComponents/organisms/Modal"
import PageBackButton from "../../commonComponents/organisms/PageBackButton"
import MyRecipePublishStatusLabel from "./MyRecipePublishStatusLabel"
import RecipeChefAvatorButton from "./RecipeChefAvatorButton"
import RecipeEditButton from "./RecipeEditButton"
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

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/recipes/${id}`,
      {
        next: { revalidate: 10 },
      }
    )
    const result = await response.json()
    console.log("レシピデータ取得結果 result=" + JSON.stringify(result))
    const dummyData = {
      ...result.data,
      isPublished: true,
      imageUrl: "/takada-images/new-recipes/recipe1.jpg",
    }
    return dummyData
  } catch (error) {
    console.error(error)
    return
  }

  // // 疑似遅延
  // const _sleep = (ms: number) =>
  //   new Promise((resolve) => setTimeout(resolve, ms))
  // await _sleep(1000)

  // console.log(new Date().toLocaleString() + " レシピデータ取得完了")

  // // ダミーデータ
  // const dummy = dummyRecipeDataList.find((item) => item.recipeId === Number(id))
  // return dummy?.outline
}

const getChefLinkData = async (
  screenName: string
): Promise<LinkType[] | undefined> => {
  // 疑似遅延
  const _sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  await _sleep(1000)

  // ダミーデータ
  const dummy = dummyLinkDataList.find((item) => item.screenName === screenName)
  return dummy?.links
}

type RecipeOutlinesProps = {
  id: string
  loginUserId?: number
}

/**
 * レシピ概要
 * @returns
 */
const RecipeOutlines = async (props: RecipeOutlinesProps) => {
  const { id, loginUserId } = props
  const recipe = await getRecipeData(id)
  const links =
    recipe?.chef?.screenName && (await getChefLinkData(recipe.chef.screenName))
  const isMyRecipe = await (loginUserId == recipe?.chef.id)
  console.log(`loginUserId=${loginUserId} userId=${recipe?.chef.id}`)

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
            {isMyRecipe ? (
              <RecipeEditMenu isPublished={recipe.isPublished} />
            ) : (
              links && <LinkIcons links={links} />
            )}
          </div>
        </div>

        {/* レシピ説明 */}
        <div className="mb-4 h-full">{recipe.description}</div>

        {/* シェフ */}
        <div className="flex flex-row items-center">
          {isMyRecipe ? (
            <MyRecipePublishStatusLabel isPublished={recipe.isPublished} />
          ) : (
            <RecipeChefAvatorButton
              src={recipe.chef.chefImageUrl}
              name={recipe.chef.display_name}
              screenName={recipe.chef.screenName}
            />
          )}
          {/* お気に入り件数 */}
          <CounterLabel
            className="ml-4"
            count={recipe.favorites_count}
            label="お気に入り"
          />
        </div>

        {/* お気に入りボタン */}
        {isMyRecipe ? (
          <div className="mt-2 flex flex-row">
            <div className="mr-2 flex-1">
              <RecipeFavoriteButton
                className="w-full"
                isMyFavorite={isMyRecipe}
                recipeId={id}
              />
            </div>
            <div className="flex-1">
              <RecipeEditButton className="w-full" />
            </div>
          </div>
        ) : (
          <div className="mt-2 flex-1">
            <RecipeFavoriteButton
              className="w-full"
              isMyFavorite={isMyRecipe}
              recipeId={id}
            />
          </div>
        )}
      </div>
    </>
  )
}
export default RecipeOutlines
