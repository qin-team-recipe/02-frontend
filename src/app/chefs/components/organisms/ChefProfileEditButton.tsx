"use client"
import { useRouter } from "next/navigation"
import React from "react"
import { useCallback } from "react"

type ChefProfileEditButtonProps = {
  screenName?: string
  className?: string
}

/**
 * プロフィール編集ボタン
 * @returns
 */
const ChefProfileEditButton = async (props: ChefProfileEditButtonProps) => {
  const { screenName, className } = props
  const router = useRouter()

  const buttonClass =
    "rounded border border-gray-600 bg-white px-1 py-1 text-sm text-gray-600 " +
    className

  const handleChefClick = useCallback(() => {
    router.push(`/users/${screenName}/profiles`)
  }, [router, screenName])

  return (
    <>
      <button className={buttonClass} onClick={handleChefClick}>
        プロフィールを編集
      </button>
    </>
  )
}
export default ChefProfileEditButton
