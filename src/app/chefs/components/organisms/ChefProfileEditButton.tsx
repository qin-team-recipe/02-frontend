"use client"
import { useRouter } from "next/navigation"
import React from "react"
import { useCallback } from "react"

type ChefProfileEditButtonProps = {
  className?: string
}

/**
 * プロフィール編集ボタン
 * @returns
 */
const ChefProfileEditButton = async (props: ChefProfileEditButtonProps) => {
  const { className } = props
  const router = useRouter()

  const buttonClass =
    "rounded border border-gray-600 bg-white px-1 py-1 text-sm text-gray-600 " +
    className

  const handleChefClick = useCallback(() => {
    //router.push(`/chefs/${screenName}`)
    alert("プロフィール編集画面へ遷移")
  }, [])

  return (
    <>
      <button className={buttonClass} onClick={handleChefClick}>
        プロフィールを編集
      </button>
    </>
  )
}
export default ChefProfileEditButton