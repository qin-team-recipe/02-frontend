import Skeleton from "@/app/recipes/commonComponents/atoms/Skeleton"

const FavoriteChefNewRecipesCarouselSkeletons = () => {
  const chefRecipes = [1, 2, 3]

  return (
    <>
      <div className="flex flex-row">
        {chefRecipes.map((chefRecipe, i) => (
          <Skeleton key={i} className="m-1 h-[128px] w-[128px]"></Skeleton>
        ))}
      </div>
    </>
  )
}
export default FavoriteChefNewRecipesCarouselSkeletons
