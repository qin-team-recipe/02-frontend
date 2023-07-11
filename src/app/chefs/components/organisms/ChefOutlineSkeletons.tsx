import Skeleton from "@/app/recipes/commonComponents/atoms/Skeleton"

/**
 * シェフ概要スケルトン
 * @returns
 */
const ChefOutlineSkeletons = () => {
  return (
    <>
      <div className="mt-2 flex justify-end">
        {/* リンク */}
        <Skeleton className="mb-2 mr-4 h-6 w-24"></Skeleton>
      </div>
      <div className="pl-4 pr-4">
        <div className="mb-2 flex flex-row">
          {/* シェフタイトル */}
          <Skeleton className="flex h-10 w-40 items-center"></Skeleton>
          {/* アバター */}
          <Skeleton type="circle" className="ml-auto h-12 w-12"></Skeleton>
        </div>

        {/* シェフ説明 */}
        <Skeleton className="mb-2 h-20 w-full"></Skeleton>

        {/* シェフ */}
        <div className="flex flex-row items-center justify-start">
          {/* お気に入り件数 */}
          <Skeleton className="h-6 w-24"></Skeleton>
        </div>

        {/* お気に入りボタン */}
        <div className="pt-2">
          <Skeleton className="mb-2 h-8 w-full"></Skeleton>
        </div>
      </div>
    </>
  )
}
export default ChefOutlineSkeletons
