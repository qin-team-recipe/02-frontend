"use client"
import { useCallback } from "react"

import AvatorButton from "../molecules/AvatorButton"

type RecipeChefAvatorButtonProps = {
  name: string
  src?: string
  isMyRecipe: boolean
}

/**
 * シェフアバターボタン
 * @returns
 */
const RecipeChefAvatorButton = async (props: RecipeChefAvatorButtonProps) => {
  const { name, src, isMyRecipe } = props

  /**
   * シェフクリック
   */
  const handleChefClick = useCallback(() => {
    alert("シェフへ移動")
  }, [])

  return (
    <>
      {isMyRecipe ? (
        <div className="rounded border border-red-300 bg-red-50 px-2 text-xs text-red-300">
          マイレシピ
        </div>
      ) : (
        <AvatorButton src={src} name={name} onClick={handleChefClick} />
      )}
    </>
  )
}
export default RecipeChefAvatorButton
