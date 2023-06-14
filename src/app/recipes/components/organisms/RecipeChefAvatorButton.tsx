"use client"
import React, { useCallback } from "react"

import AvatorButton from "../molecules/AvatorButton"

type RecipeChefAvatorButtonProps = {
  name: string
  src?: string
}

/**
 * シェフアバターボタン
 * @returns
 */
const RecipeChefAvatorButton = async (props: RecipeChefAvatorButtonProps) => {
  const { name, src } = props

  /**
   * シェフクリック
   */
  const handleChefClick = useCallback(() => {
    alert("シェフへ移動")
  }, [])

  return (
    <>
      <AvatorButton src={src} name={name} onClick={handleChefClick} />
    </>
  )
}
export default RecipeChefAvatorButton
