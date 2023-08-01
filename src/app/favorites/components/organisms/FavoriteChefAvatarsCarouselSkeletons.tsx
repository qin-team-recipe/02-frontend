import Skeleton from "@/app/recipes/commonComponents/atoms/Skeleton"

const FavoriteChefAvatarsCarouselSkeletons = () => {
  const chefRecipes = [1, 2, 3]

  return (
    <>
      <div className="flex flex-row">
        {chefRecipes.map((chefRecipe, i) => (
          <Skeleton
            key={i}
            type="circle"
            className="m-1 h-[80px] w-[80px]"
          ></Skeleton>
        ))}
      </div>
    </>
  )
}
export default FavoriteChefAvatarsCarouselSkeletons
