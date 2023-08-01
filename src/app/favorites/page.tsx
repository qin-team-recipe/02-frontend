import Link from "next/link"
import { Suspense } from "react"

import { SubHeader } from "../recipes/commonComponents/molecules/SubHeader"
import FavoriteChefAvatarsCarousel from "./components/organisms/FavoriteChefAvatarsCarousel"
import FavoriteChefAvatarsCarouselSkeletons from "./components/organisms/FavoriteChefAvatarsCarouselSkeletons"
import FavoriteChefNewRecipesCarousel from "./components/organisms/FavoriteChefNewRecipesCarousel"
import FavoriteChefNewRecipesCarouselSkeletons from "./components/organisms/FavoriteChefNewRecipesCarouselSkeletons"
import FavoriteHeader from "./components/organisms/FavoriteHeader"
import FavoriteRecipesGallery from "./components/organisms/FavoriteRecipesGallery"
import FavoriteRecipesGallerySkeletons from "./components/organisms/FavoriteRecipesGallerySkeletons"

const Favorites = ({
  params,
  searchParams,
}: {
  params: { id: string }
  searchParams: { tab: string; userid: string }
}) => {
  const linkItem = (
    <Link
      href="/favorites/newly"
      className="font-bold text-gray-500 hover:underline"
    >
      もっと見る
    </Link>
  )

  return (
    <>
      <FavoriteHeader />
      <div className="px-4">
        <div className="py-4">
          <SubHeader title="シェフ" textSize="text-xl" />
          <Suspense fallback={<FavoriteChefAvatarsCarouselSkeletons />}>
            <FavoriteChefAvatarsCarousel />
          </Suspense>
        </div>

        <div className="mt-6 py-4">
          <SubHeader
            title="新着レシピ"
            textSize="text-xl"
            rightItem={linkItem}
          />
          <Suspense fallback={<FavoriteChefNewRecipesCarouselSkeletons />}>
            <FavoriteChefNewRecipesCarousel />
          </Suspense>
        </div>

        <div className="mt-6 py-4">
          <SubHeader title="お気に入りレシピ" textSize="text-xl" />
          <Suspense fallback={<FavoriteRecipesGallerySkeletons />}>
            <FavoriteRecipesGallery />
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default Favorites
