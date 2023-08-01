"use client"
import { useRouter } from "next/navigation"
import { useCallback } from "react"

import { ChefOutlineType } from "@/app/chefs/[screenName]/type"
import useFetchWithAuth from "@/app/hooks/useFetchWithAuth"
import AvatorButton from "@/app/recipes/commonComponents/molecules/AvatorButton"
import { getLoginUserFromLocalStorage } from "@/app/utils/localStorage"

import { Carousel } from "../../../recipes/commonComponents/molecules/Carousel"
import FavoriteChefAvatarsCarouselSkeletons from "./FavoriteChefAvatarsCarouselSkeletons"

export type FavoriteChef = {
  id: number
  user_id: number
  chef_id: number
  chef: ChefOutlineType
  imageSrc: string
}

const FavoriteChefAvatarsCarousel = () => {
  const loginUser = getLoginUserFromLocalStorage()
  const { data, isLoading, error, isAuthError } = useFetchWithAuth(
    `/chefFollows?user_id=${loginUser.id}`
  )
  const router = useRouter()

  const handleChefClick = useCallback(
    (screenName: string) => {
      if (screenName) {
        router.push(`/chefs/${screenName}`)
      }
    },
    [router]
  )

  if (isLoading) {
    return <FavoriteChefAvatarsCarouselSkeletons />
  }

  const favoriteChefs: FavoriteChef[] = data ?? []
  if (favoriteChefs.length == 0) {
    return (
      <>
        <div className="w-full p-4">
          <div className="flex flex-row justify-center">
            <div className="m-4 text-sm">お気に入りシェフがありません</div>
          </div>
        </div>
      </>
    )
  }

  const favoriteChefsWithDummy = favoriteChefs.map((chef: FavoriteChef) => ({
    ...chef,
    imageSrc: "/takada-images/chefs/chef1.jpg",
  }))

  return (
    <Carousel>
      {favoriteChefsWithDummy.map((chef: FavoriteChef) => (
        <div key={chef.chef_id} className="flex flex-col">
          <AvatorButton
            src={chef.imageSrc}
            onClick={() => handleChefClick(chef.chef.screen_name)}
            size={80}
          />
          <p className="w-[80px] truncate text-center text-xs">
            {chef.chef.display_name}
          </p>
        </div>
      ))}
    </Carousel>
  )
}
export default FavoriteChefAvatarsCarousel
