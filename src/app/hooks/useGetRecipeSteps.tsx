import useFetch from "./useFetch"

const useGetRecipeSteps = (recipeId: number) => {
  const { data, isLoading, error } = useFetch(
    `/recipeSteps?recipe_id=${recipeId}`
  )
  return { data, isLoading, error }
}

export default useGetRecipeSteps
