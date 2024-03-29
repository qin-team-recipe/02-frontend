import { ChefRecipe } from "@/app/chefs/[screenName]/type"
import ChefRecipesGallery from "@/app/search/components/organisms/ChefRecipesGallery"
import { fetchGetData } from "@/app/utils/fetchMethod"

/**
 * シェフレシピデータ取得
 * @param screenName
 * @returns
 */
export const getChefRecipeData = async (
  screenName: string
): Promise<ChefRecipe[] | undefined> => {
  console.log("シェフレシピデータ取得 screenName=" + screenName)

  // TODO API作成前のため仮で全レシピ取得を実行
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/chefRecipes`,
    {
      next: { revalidate: 10 },
    }
  )

  const result = await response.json()
  //console.log("シェフレシピデータ取得 data=" + JSON.stringify(result))
  // TODO 画像はダミー
  const dummyData = result.data.map((chefRecipe: ChefRecipe) => ({
    ...chefRecipe,
    imageSrc: "/takada-images/my-recipes/recipe1.jpg",
  }))

  return dummyData
}

const getData = async (url: string) => {
  const response = await fetchGetData({
    url: url,
  })
  console.log("シェフデータ一覧結果=" + JSON.stringify(response))

  // URLによる条件分岐
  if (url.includes("/recommends/chefs")) {
    return response.data
  } else if (url.includes("/chefs") || url.includes("/recommends/recipes")) {
    return response.data.lists
  } else {
    // 予期せぬURLが渡された場合のエラーハンドリング
    throw new Error("Invalid URL specified")
  }
}

/**
 * 新着レシピタブコンテンツ
 * @param props
 * @returns
 */
const ChefTabNewRecipes = async () => {
  // const recipes = await getChefRecipeData(screenName)
  const recomendsRecipes = await getData("/recommends/recipes")
  console.log("話題のレシピ取得結果 data=" + recomendsRecipes)
  console.log(recomendsRecipes)

  if (!recomendsRecipes) {
    return (
      <>
        <div className="w-full p-4">
          <div className="flex flex-row justify-center">
            <div className="m-10 text-xl">レシピが登録されていません</div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {/* レシピリスト */}
      <div className="p-2">
        <ChefRecipesGallery chefRecipes={recomendsRecipes} />
      </div>
    </>
  )
}
export default ChefTabNewRecipes
