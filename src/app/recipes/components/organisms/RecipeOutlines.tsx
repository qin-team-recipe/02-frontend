import { RecipeOutlineType } from "../../[id]/type"
import ImageWithBlurType from "../../commonComponents/molecules/ImageWithBlur"
import { LinkType } from "../../commonComponents/organisms/LinkIcons"
import Modal from "../../commonComponents/organisms/Modal"
import PageBackButton from "../../commonComponents/organisms/PageBackButton"
import RecipeOutlineMenus from "./RecipeOutlineMenus"
import RecipeOutlineSkeletons from "./RecipeOutlineSkeletons"
import RecipeOutlineSubInfomations from "./RecipeOutlineSubInfomations"

/**
 * レシピデータ取得
 * @param watchId
 * @returns
 */
export const getRecipeData = async (
  watchId: string
): Promise<RecipeOutlineType | undefined> => {
  console.log(
    new Date().toLocaleString() + " レシピデータ取得 watchId=" + watchId
  )

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/recipes/${watchId}`,
      {
        next: { revalidate: 10 },
      }
    )
    const result = await response.json()
    console.log("レシピデータ取得結果 result=" + JSON.stringify(result))

    const dummyData = {
      ...result.data,
      imageUrl: "/takada-images/new-recipes/recipe1.jpg",
      chef: {
        chefImageUrl: "/takada-images/chefs/chef2.jpg",
      },
    }
    return dummyData
  } catch (error) {
    console.error(error)
    return
  }
}

const getRecipeLinkData = async (): Promise<LinkType[] | undefined> => {
  // // 疑似遅延
  // const _sleep = (ms: number) =>
  //   new Promise((resolve) => setTimeout(resolve, ms))
  // await _sleep(1000)

  // ダミーデータ
  const dummy: LinkType[] = [
    {
      id: 1,
      service_name: "YouTube",
      url: "http://www.youtube.com/",
      chef_id: 0,
      recipe_id: 0,
    },
    {
      id: 2,
      service_name: "Twitter",
      url: "http://www.twitter.com/",
      chef_id: 0,
      recipe_id: 0,
    },
    {
      id: 3,
      service_name: "Instagram",
      url: "http://www.instagram.com/",
      chef_id: 0,
      recipe_id: 0,
    },
    {
      id: 4,
      service_name: "Facebook",
      url: "http://www.facebook.com/",
      chef_id: 0,
      recipe_id: 0,
    },
    {
      id: 5,
      service_name: "ほげほげ.com",
      url: "http://www.hogehoge.com/",
      chef_id: 0,
      recipe_id: 0,
    },
  ]
  return dummy
}

type RecipeOutlinesProps = {
  watchId: string
}

/**
 * レシピ概要
 * @returns
 */
const RecipeOutlines = async (props: RecipeOutlinesProps) => {
  const { watchId } = props
  const recipe = await getRecipeData(watchId)

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

  // TODO レシピのリンクはダミー
  const links = await getRecipeLinkData()

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
              links={links}
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
