import type { NextPage } from "next"
import Link from "next/link"

// TODO: RecipesGallery(仮)はfavoritesディレクトリではなく共通コンポーネントになるはずなので修正する。
import { RecipesGallery } from "../favorites/components/RecipesGallery"
import { newRecipeImages } from "../favorites/mock"
import { BackIcon } from "./components/BackIcon"

const Page: NextPage = () => (
  <>
    <div className="flex items-center space-x-2 border-b-2 px-4 py-3">
      <Link href="/favorites">
        <BackIcon />
      </Link>
      <p className="font-bold">新着レシピ</p>
    </div>

    <div className="px-4">
      <RecipesGallery recipeImages={newRecipeImages} />
    </div>
  </>
)

export default Page
