"use client"
import { useRouter } from "next/navigation"
import { useCallback } from "react"

import AvatorButton from "../../commonComponents/molecules/AvatorButton"

type RecipeChefAvatorButtonProps = {
  name?: string
  src?: string
  screenName?: string
}

/**
 * シェフアバターボタン
 * @returns
 */
const RecipeChefAvatorButton = async (props: RecipeChefAvatorButtonProps) => {
  const { name, src, screenName } = props
  const router = useRouter()

  const handleChefClick = useCallback(() => {
    if (screenName) {
      router.push(`/chefs/${screenName}`)
    }
  }, [router, screenName])

  return (
    <>
      <AvatorButton src={src} name={name} onClick={handleChefClick} size={20} />
    </>
  )
}
export default RecipeChefAvatorButton
