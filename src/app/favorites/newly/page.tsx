import { Suspense } from "react"

import PageBackButton from "@/app/recipes/commonComponents/organisms/PageBackButton"

import FavoriteChefNewRecipesGllery from "./components/FavoriteChefNewRecipesGallery"
import FavoriteChefNewRecipesGallerySkeletons from "./components/FavoriteChefNewRecipesGallerySkeletons"

const Favorites = () => {
  return (
    <>
      <div className="flex items-center justify-between border-b-2 px-2 py-3">
        <div className="flex-0.3 ">
          <PageBackButton />
        </div>
        <div className="flex-0.3 text-xl font-bold">新着レシピ</div>
        <div className="flex-0.3"></div>
      </div>
      <Suspense fallback={<FavoriteChefNewRecipesGallerySkeletons />}>
        <FavoriteChefNewRecipesGllery />
      </Suspense>
    </>
  )
}

export default Favorites
