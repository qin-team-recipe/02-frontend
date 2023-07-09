import type { FC, ReactNode } from "react"

import { ChefAvatarsCarousel } from "./components/ChefAvatarsCarousel"
import { NewRecipesCarousel } from "./components/NewRecipesCarousel"
import { SettingIcon } from "./components/SettingIcon"
import { SubHeader } from "./components/SubHeader"
import { chefImages, newRecipeImages } from "./mock"

type FavoritesLayoutProps = {
  children: ReactNode
}

const FavoritesLayout: FC<FavoritesLayoutProps> = ({ children }) => (
  <>
    <div className="flex items-center justify-between border-b-2 px-2 py-3">
      {/* お気に入りの文字を中央にするため、先頭に空のdivを置く */}
      <div />
      <p className="font-bold ">お気に入り</p>
      <div className="cursor-pointer">
        <SettingIcon />
      </div>
    </div>

    <div className="px-4">
      <div className="py-4">
        <SubHeader title="シェフ" />
        <ChefAvatarsCarousel chefImages={chefImages} />
      </div>

      <div className="mt-6 py-4">
        <SubHeader
          title="新着レシピ"
          link={{ href: "/new-recipes", text: "もっと見る" }}
        />
        <NewRecipesCarousel newRecipeImages={newRecipeImages} />
      </div>

      <div className="mt-6 py-4">{children}</div>
    </div>
  </>
)

export default FavoritesLayout
