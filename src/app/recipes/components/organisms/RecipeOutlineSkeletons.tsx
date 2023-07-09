import Skeleton from "../atoms/Skeleton"

/**
 * レシピ概要スケルトン
 * @returns
 */
const RecipeOutlineSkeletons = () => {
  return (
    <>
      <div className="w-full">
        {/* レシピ画像 */}
        <Skeleton type="sharp" className="h-96 w-full"></Skeleton>
      </div>
      <div className="p-4">
        <div className="flex flex-row">
          {/* レシピタイトル */}
          <Skeleton className="mb-2 h-10 w-40"></Skeleton>
        </div>

        {/* レシピ説明 */}
        <Skeleton className="mb-2 h-40 w-full"></Skeleton>

        {/* シェフ */}
        <div className="flex flex-row items-center justify-start">
          {/* アバター */}
          <Skeleton type="circle" className="mr-2 h-10 w-10"></Skeleton>
          <Skeleton className="mr-2 h-8 w-24"></Skeleton>

          {/* お気に入り件数 */}
          <Skeleton className="h-8 w-24"></Skeleton>
        </div>

        {/* お気に入りボタン（マイレシピ以外表示）*/}
        <div className="pt-2">
          <Skeleton className="mb-2 h-10 w-32"></Skeleton>
        </div>
      </div>
    </>
  )
}
export default RecipeOutlineSkeletons
