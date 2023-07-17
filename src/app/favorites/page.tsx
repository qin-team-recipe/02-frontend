import Link from "next/link"

import Sidebar from "../components/Sidebar"
import { ChefAvatarsCarousel } from "./components/ChefAvatarsCarousel"
import { NewRecipesCarousel } from "./components/NewRecipesCarousel"
import { RecipesGallery } from "./components/RecipesGallery"
import { SettingIcon } from "./components/SettingIcon"
import { SubHeader } from "./components/SubHeader"
import { chefImages, myRecipeImages, newRecipeImages } from "./mock"

const Page = () => (
  <>
    <div className="flex items-center justify-between border-b-2 px-2 py-3">
      {/* お気に入りの文字を中央にするため、先頭に空のdivを置く */}
      <div />
      <p className="font-bold">お気に入り</p>
      <div className="cursor-pointer">
        <Link href="/settings">
          <SettingIcon />
        </Link>
      </div>
    </div>

    <div className="flex justify-center">
      <Sidebar />
      <div className="px-4">
        <div className="py-4">
          <SubHeader title="シェフ" />
          <ChefAvatarsCarousel chefImages={chefImages} />
        </div>

        <div className="mt-6 py-4">
          {/* TODO: 遷移先の修正。一旦、同じページへの遷移とする */}
          <SubHeader
            title="新着レシピ"
            link={{ href: "/favorites", text: "もっと見る" }}
          />
          <NewRecipesCarousel newRecipeImages={newRecipeImages} />
        </div>

        <div className="mt-6 py-4">
          {/* TODO: 遷移先の修正。一旦、同じページへの遷移とする */}
          <SubHeader
            title="マイレシピを見る"
            link={{ href: "/favorites", text: "マイレシピを見る" }}
          />
          <RecipesGallery recipeImages={myRecipeImages} />
        </div>
      </div>
    </div>
  </>
)

export default Page
