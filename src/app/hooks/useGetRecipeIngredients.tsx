import useFetch from "./useFetch"

const useGetRecipeIngredients = (recipeId: number) => {
  const { data, isLoading, error } = useFetch(
    `/recipeIngredients?recipe_id=${recipeId}`
  )
  return { data, isLoading, error }
}

export default useGetRecipeIngredients
