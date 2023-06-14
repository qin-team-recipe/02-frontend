"use client"
import React, { useCallback, useState } from "react"

import FavoriteButton from "../molecules/FavoriteButton"

type RecipeFavoriteButtonProps = {
  className?: string
  isMyFavorite: boolean
}

/**
 * レシピ概要
 * @returns
 */
const RecipeFavoriteButton = async (props: RecipeFavoriteButtonProps) => {
  const { className, isMyFavorite } = props
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
      />
    </>
  )
}
export default RecipeFavoriteButton
