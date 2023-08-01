// eslint-disable-next-line simple-import-sort/imports
import { Suspense } from "react"
import Tabs, {
  TabComponent,
} from "@/app/recipes/commonComponents/organisms/Tabs"

import ChefOutlines from "@/app/chefs/components/organisms/ChefOutlines"
import ChefOutlineSkeletons from "@/app/chefs/components/organisms/ChefOutlineSkeletons"
import ChefTabNewRecipes from "@/app/chefs/components/organisms/ChefTabNewRecipes"
import ChefTabPopularRecipes from "@/app/chefs/components/organisms/ChefTabPopularRecipes"
import ChefTabRecipeSkeletons from "@/app/chefs/components/organisms/ChefTabRecipeSkeletons"

const Users = async ({
  params,
  searchParams,
}: {
  params: { screenName: string }
  searchParams: { tab: string; type: string }
}) => {
  const activeIndex = searchParams.tab ? Number(searchParams.tab) : undefined
  const type = "user"

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
          <ChefOutlines screenName={params.screenName} type={type} />
        </Suspense>

        {/* シェフ情報タブ */}
        <div>
          <Tabs activeIndex={activeIndex} tabComponents={tabComponents} />
        </div>
      </main>
    </>
  )
}
export default Users
