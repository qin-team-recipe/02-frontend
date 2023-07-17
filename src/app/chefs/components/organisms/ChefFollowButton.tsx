"use client"
import { useCallback, useState } from "react"

import FavoriteButton from "@/app/recipes/commonComponents/molecules/FavoriteButton"

type ChefFollowButtonProps = {
  isMyFavorite: boolean
  className: string
}

/**
 * レシピ概要
 * @returns
 */
const ChefFollowButton = (props: ChefFollowButtonProps) => {
  const { isMyFavorite, className } = props
  const [isFavorite, setIsFavorite] = useState(isMyFavorite)

  /**
   * お気に入りクリック
   */
  const handleFavoriteClick = useCallback(() => {
    alert("お気に入り登録" + (isFavorite ? "解除" : ""))
    setIsFavorite((preIsFavorite) => !preIsFavorite)
  }, [isFavorite])

  return (
    <>
      {/* お気に入りボタン */}
      <FavoriteButton
        className={className}
        onClick={handleFavoriteClick}
        isActive={isFavorite}
        activeTitle="フォロー中"
        inactiveTitle="フォローする"
      />
    </>
  )
}
export default ChefFollowButton
