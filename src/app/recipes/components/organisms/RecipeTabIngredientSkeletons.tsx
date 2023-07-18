import Skeleton from "../atoms/Skeleton"

/**
 * レシピタブ材料コンテンツスケルトン
 * @returns
 */
const RecipeTabIngredientSkeletons = async () => {
  const ingredientList = [1, 2, 3, 4, 5]
  return (
    <>
      <div className="flex w-full flex-col ">
        <div className="mb-1 mt-4 flex h-8 flex-row">
          {/* 材料分量 */}
          <Skeleton className="ml-4 h-10 w-20"></Skeleton>

          {/* まとめてお買い物に追加 */}
          <span className="ml-auto mr-2">
            <Skeleton className="h-10 w-40"></Skeleton>
          </span>
        </div>

        {/* 材料リスト */}
        {ingredientList.map((item, i) => (
          <div key={i} className="m-1 flex">
            <Skeleton className="m-1 h-20 w-full"></Skeleton>
          </div>
        ))}
      </div>
    </>
  )
}
export default RecipeTabIngredientSkeletons
