"use client"
import { useRouter } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import React from "react"

import Fab from "../../../recipes/commonComponents/molecules/Fab"

type ChefAddRecipeFabProps = {
  className?: string
}

/**
 * マイレシピ追加FAB
 * @returns
 */
const ChefAddRecipeFab = (props: ChefAddRecipeFabProps) => {
  const { className } = props
  const [isVisible, setIsVisible] = useState(true)
  const [lastY, setLastY] = useState(0)
  const router = useRouter()

  useEffect(() => {
    // スクロールダウンで非表示、スクロールアップした際に再表示
    const handleScroll = () => {
      const isScrolledDown = window.scrollY - lastY > 0
      setIsVisible(!isScrolledDown)
      setLastY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastY])

  const handleClick = useCallback(() => {
    router.push("/draft")
  }, [router])

  return (
    <>
      {/* お気に入りボタン */}
      <Fab
        onClick={handleClick}
        message="マイレシピを追加"
        isShow={isVisible}
      />
    </>
  )
}
export default ChefAddRecipeFab
