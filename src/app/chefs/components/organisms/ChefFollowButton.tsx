"use client"
import { usePathname, useRouter } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

import FavoriteButton from "@/app/recipes/commonComponents/molecules/FavoriteButton"
import Modal from "@/app/recipes/commonComponents/organisms/Modal"
import {
  getLoginUserFromLocalStorage,
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage,
  setPathGoAfterLoginToLocalStorage,
} from "@/app/utils/localStorage"

type ChefFollowButtonProps = {
  className?: string
  chefId: number
}

/**
 * レシピ概要
 * @returns
 */
const ChefFollowButton = (props: ChefFollowButtonProps) => {
  const { className, chefId } = props
  const [isFavorite, setIsFavorite] = useState(false)
  const [isOpenLoginAlert, setIsOpenLoginAlert] = useState(false)
  const [isOpenAuthErrorAlert, setIsOpenAuthErrorAlert] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const loginUser = getLoginUserFromLocalStorage()
  const token = getTokenFromLocalStorage()

  useEffect(() => {
    const getChefFollowsData = async (userId: number, chefId: number) => {
      try {
        console.log("フォロー判定")
        if (!token) return

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/chefFollows?user_id=${userId}`,
          {
            headers: {
              Authorization: token,
            },
          }
        )
        const result = await response.json()
        const favorites = result.data

        const isMyFavorite =
          favorites.find((el: { chef_id: number }) => el.chef_id == chefId) !=
          undefined
        console.log("フォロー判定 isMyFavorite=" + isMyFavorite)
        setIsFavorite(isMyFavorite)
      } catch (error) {
        // TODO エラー判定が必要
        console.log(error)
        return
      }
    }
    getChefFollowsData(loginUser.id, chefId)
  }, [loginUser.id, chefId, token])

  const updateFavorite = async (
    type: "add" | "remove",
    chefId: number,
    userId: number,
    token: string
  ) => {
    console.log("お気に入り更新 type=" + type)

    const method = type == "add" ? "POST" : "DELETE"
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/chefFollows`,
        {
          method: method,
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: `
          {
            "chef_id": ${chefId},
            "user_id": ${userId}
          }`,
        }
      )
      if (response.status == 400 || response.status == 401) {
        console.error("認証エラー")
        removeTokenFromLocalStorage()
        setIsOpenAuthErrorAlert(true)
        return
      }

      const result = await response.json()
      console.log(response.status)
      if (result.message != "success") {
        console.error("お気に入り更新失敗")
      } else {
        console.log("お気に入り更新成功")
      }
    } catch (error) {
      console.error("お気に入り更新失敗 error=" + error)
    }
    return
  }
  /**
   * お気に入りクリック
   */
  const handleFavoriteClick = useCallback(() => {
    if (token && loginUser) {
      updateFavorite(isFavorite ? "remove" : "add", chefId, loginUser.id, token)
      setIsFavorite((preIsFavorite) => !preIsFavorite)
    } else {
      setIsOpenLoginAlert(true)
    }
  }, [chefId, isFavorite, loginUser, token])

  const gotoLogin = () => {
    setPathGoAfterLoginToLocalStorage(pathname)
    router.push("/signinpage")
  }

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

      <Modal isOpen={isOpenLoginAlert}>
        <div className="m-2 flex flex-col items-center justify-center">
          <div className="m-2 text-xl">ログインしてください</div>
          <div className="mt-2">
            <div className="rounded bg-blue-400 p-2 text-sm text-white">
              <button onClick={gotoLogin}>ログイン画面へ</button>
            </div>
          </div>
        </div>
      </Modal>

      <Modal isOpen={isOpenAuthErrorAlert}>
        <div className="m-2 flex flex-col items-center justify-center">
          <div className="m-2 text-xl">
            認証に失敗しました
            <br />
            ログインしなおしてください
          </div>
          <div className="mt-2">
            <div className="rounded bg-blue-400 p-2 text-sm text-white">
              <button onClick={gotoLogin}>ログイン画面へ</button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
export default ChefFollowButton
