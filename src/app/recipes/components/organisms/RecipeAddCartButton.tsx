"use client"
import React, { useCallback } from "react"

type RecipeAddCartButtonProps = {
  children: React.ReactElement
  ingredientList: {
    id: number
    name: string
    description: string
  }[]
}

/**
 * 買い物リスト追加ボタン
 * @param props
 * @returns
 */
const RecipeAddCartButton = (props: RecipeAddCartButtonProps) => {
  const { children, ingredientList } = props

  /**
   * 買い物リスト追加クリック
   */
  const handleAddToCartClick = useCallback(
    (ingredientList: { id: number; name: string; description: string }[]) => {
      const ingredientNames = ingredientList.map((item) => item.name).join("\n")
      alert(`買い物リストに追加\n` + ingredientNames)
    },
    []
  )

  return (
    <>
      <button onClick={() => handleAddToCartClick(ingredientList)}>
        {children}
      </button>
    </>
  )
}
export default RecipeAddCartButton
