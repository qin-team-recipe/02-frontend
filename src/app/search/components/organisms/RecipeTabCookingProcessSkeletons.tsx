import Skeleton from "@/app/recipes/commonComponents/atoms/Skeleton"

/**
 * レシピタブ工程コンテンツスケルトン
 * @returns
 */
const RecipeTabCookingProcessSkeletons = async () => {
  const process = [1, 2, 3, 4, 5]
  return (
    <>
      {/* 工程リスト */}
      {process.map((item, i) => (
        <div key={i} className="m-1 flex flex-row">
          <Skeleton type="circle" className="h-6 w-6"></Skeleton>
          <Skeleton className="m-1 h-20 w-full"></Skeleton>
        </div>
      ))}
    </>
  )
}
export default RecipeTabCookingProcessSkeletons
