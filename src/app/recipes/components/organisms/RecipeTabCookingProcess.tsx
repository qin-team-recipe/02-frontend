import { dummyRecipeProcessList } from "../../[id]/mock"
import { RecipeCookingProcessType } from "../../[id]/type"
import RecipeTabCard from "./RecipeTabCard"

type RecipeTabProcessProps = {
  id: string
}

/**
 * レシピ工程データ取得
 * @param id
 * @returns
 */
const getRecipeProcessData = async (
  id: string
): Promise<RecipeCookingProcessType[] | undefined> => {
  console.log("レシピ工程データ取得 id=" + id)

  // const response = await fetch(
  //   `http://localhost:3000/api/recipes/${id}/process`,
  //   {
  //     //next: { revalidate: 10 },
  //     cache: "no-store",
  //   }
  // );
  // const data = await response.json();
  // console.log("レシピ工程データ取得結果 data=" + JSON.stringify(data));
  // return data;

  // 疑似遅延
  const _sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  await _sleep(3000)

  // ダミーデータ
  const dummy = dummyRecipeProcessList.find(
    (item) => item.recipeId === Number(id)
  )
  return dummy?.process
}

/**
 * レシピタブ工程コンテンツ
 * @param props
 * @returns
 */
const RecipeTabCookingProcess = async (props: RecipeTabProcessProps) => {
  const { id } = props
  const process = await getRecipeProcessData(id)

  if (!process) {
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

  return (
    <>
      {/* 工程リスト */}
      {process.map((item, i) => (
        <RecipeTabCard
          key={i}
          number={item.stepNumber}
          mainMessage={item.title}
          subMessage={item.description}
        />
      ))}
    </>
  )
}
export default RecipeTabCookingProcess
