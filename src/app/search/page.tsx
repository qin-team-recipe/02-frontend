// eslint-disable-next-line simple-import-sort/imports
import { Suspense } from "react"

import Tabs, {
  TabComponent,
} from "@/app/recipes/commonComponents/organisms/Tabs"
import RecipeTabIngredientSkeletons from "./components/organisms/RecipeTabIngredientSkeletons"
import Container from "@/app/components/Container"
import FooterMenu from "../components/FooterMenu"
import { fetchGetData } from "../utils/fetchMethod"
import TopChefCard from "../components/TopChefCard"
import ChefTabNewRecipes from "../chefs/components/organisms/ChefTabNewRecipes"
import ChefTabRecipeSkeletons from "../chefs/components/organisms/ChefTabRecipeSkeletons"

const Recipes = async ({
  params,
  searchParams,
}: {
  params: { screenName: string }
  searchParams: { tab: string; userid: string }
}) => {
  const activeIndex =
    searchParams.tab === "recipe"
      ? 0
      : searchParams.tab === "chef"
      ? 1
      : undefined
  const getChefs = async () => {
    const response = await fetchGetData({
      url: "/chefs",
    })
    console.log("シェフデータ一覧結果=" + JSON.stringify(response))
    return response.data.lists
  }
  const chefs = await getChefs()
  const tabComponents: TabComponent[] = [
    {
      title: "レシピ",
      contents: (
        <Suspense fallback={<ChefTabRecipeSkeletons />}>
          <ChefTabNewRecipes screenName={params.screenName} />
        </Suspense>
      ),
    },
    {
      title: "シェフ",
      contents: (
        <Suspense fallback={<RecipeTabIngredientSkeletons />}>
          <TopChefCard data={chefs} />
        </Suspense>
      ),
    },
  ]

  return (
    <>
      <Container>
        {/* レシピ情報タブ */}
        <div>
          <Tabs activeIndex={activeIndex} tabComponents={tabComponents} />
        </div>
        <div className="w-[476px]: -mx-[16px] overflow-auto border-l-2 border-r-2">
          <FooterMenu />
        </div>
      </Container>
    </>
  )
}
export default Recipes
