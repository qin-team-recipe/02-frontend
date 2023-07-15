"use client"
import { useCallback, useState } from "react"

import FavoriteButton from "../../commonComponents/molecules/FavoriteButton"

type RecipeFavoriteButtonProps = {
  className?: string
  isMyFavorite: boolean
}

/**
 * レシピ概要
 * @returns
 */
const RecipeFavoriteButton = (props: RecipeFavoriteButtonProps) => {
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
        activeTitle="お気に入りから削除"
        inactiveTitle="お気に入りに追加"
      />
    </>
  )
}
export default RecipeFavoriteButton
