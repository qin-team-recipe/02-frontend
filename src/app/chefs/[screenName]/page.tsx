// eslint-disable-next-line simple-import-sort/imports
import { Suspense } from "react"

import ChefOutlines from "../components/organisms/ChefOutlines"
import ChefOutlineSkeletons from "../components/organisms/ChefOutlineSkeletons"
import ChefTabRecipeSkeletons from "../components/organisms/ChefTabRecipeSkeletons"
import Tabs, {
  TabComponent,
} from "@/app/recipes/commonComponents/organisms/Tabs"
import ChefTabPopularRecipes from "../components/organisms/ChefTabPopularRecipes"
import ChefTabNewRecipes from "../components/organisms/ChefTabNewRecipes"

const Chefs = async ({
  params,
  searchParams,
}: {
  params: { screenName: string }
  searchParams: { tab: string; userid: string }
}) => {
  const activeIndex = searchParams.tab ? Number(searchParams.tab) : undefined
  const loginUserId = searchParams.userid
    ? Number(searchParams.userid)
    : undefined

  const tabComponents: TabComponent[] = [
    {
      title: "新着レシピ",
      contents: (
        <Suspense fallback={<ChefTabRecipeSkeletons />}>
          <ChefTabNewRecipes screenName={params.screenName} />
        </Suspense>
      ),
    },
    {
      title: "人気レシピ",
      contents: (
        <Suspense fallback={<ChefTabRecipeSkeletons />}>
          <ChefTabPopularRecipes screenName={params.screenName} />
        </Suspense>
      ),
    },
  ]

  return (
    <>
      <main className="flex-1 overflow-hidden sm:border-x">
        {/* シェフ概要 */}
        <Suspense fallback={<ChefOutlineSkeletons />}>
          <ChefOutlines
            screenName={params.screenName}
            loginUserId={loginUserId}
          />
        </Suspense>

        {/* シェフ情報タブ */}
        <div>
          <Tabs activeIndex={activeIndex} tabComponents={tabComponents} />
        </div>
      </main>
    </>
  )
}
export default Chefs
