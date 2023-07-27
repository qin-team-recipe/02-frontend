"use client"
import { usePathname, useRouter } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

import {
  getLoginUserFromLocalStorage,
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage,
  setPathGoAfterLoginToLocalStorage,
} from "@/app/utils/localStorage"

import FavoriteButton from "../../commonComponents/molecules/FavoriteButton"
import Modal from "../../commonComponents/organisms/Modal"

type RecipeFavoriteButtonProps = {
  className?: string
  isMyFavorite: boolean
  recipeId: string
}

/**
 * レシピ概要
 * @returns
 */
const RecipeFavoriteButton = (props: RecipeFavoriteButtonProps) => {
  const { className, recipeId } = props
  const [isFavorite, setIsFavorite] = useState(false)
  const [isOpenLoginAlert, setIsOpenLoginAlert] = useState(false)
  const [isOpenAuthErrorAlert, setIsOpenAuthErrorAlert] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const loginUser = getLoginUserFromLocalStorage()
  const token = getTokenFromLocalStorage()

  useEffect(() => {
    const getRecipeFavoritesData = async (userId: number, recipeId: number) => {
      try {
        console.log("お気に入り判定")
        if (!token) return

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/recipeFavorites?user_id=${userId}`,
          {
            headers: {
              Authorization: token,
            },
          }
        )
        const result = await response.json()
        const favorites = result.data

        const isMyFavorite =
          favorites.find(
            (el: { recipe_id: number }) => el.recipe_id == recipeId
          ) != undefined
        console.log("お気に入り判定 isMyFavorite=" + isMyFavorite)
        setIsFavorite(isMyFavorite)
      } catch (error) {
        // TODO エラー判定が必要
        console.log(error)
        return
      }
    }
    getRecipeFavoritesData(loginUser.id, Number(recipeId))
  }, [loginUser.id, recipeId, token])

  const updateFavorite = async (
    type: "add" | "remove",
    recipeId: string,
    userId: number,
    token: string
  ) => {
    console.log("お気に入り更新 type=" + type)

    const method = type == "add" ? "POST" : "DELETE"
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/recipeFavorites`,
        {
          method: method,
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: `{
            "recipe_id": ${recipeId},
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
      updateFavorite(
        isFavorite ? "remove" : "add",
        recipeId,
        loginUser.id,
        token
      )
      setIsFavorite((preIsFavorite) => !preIsFavorite)
    } else {
      setIsOpenLoginAlert(true)
    }
  }, [isFavorite, loginUser, recipeId, token])

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
        activeTitle="お気に入りから削除"
        inactiveTitle="お気に入りに追加"
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
export default RecipeFavoriteButton
