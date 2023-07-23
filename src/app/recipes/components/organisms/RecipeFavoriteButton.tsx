"use client"
import { usePathname, useRouter } from "next/navigation"
import { useCallback, useState } from "react"

import {
  getLoginUserFromLocalStorage,
  getTokenFromLocalStorage,
  setPathGoAfterLoginToLocalStorage,
} from "@/app/utils/localStorage"

import FavoriteButton from "../../commonComponents/molecules/FavoriteButton"
import Modal from "../../commonComponents/organisms/Modal"

type RecipeFavoriteButtonProps = {
  className?: string
  isMyFavorite: boolean
  recipeId: string
}

const addFavorite = async (recipeId: string, userId: number, token: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/recipeFavorites`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: `{
        "recipe_id": ${recipeId},
        "user_id": ${userId},
      }`,
    }
  )
  const result = await response.json()
  if (result.message != "success") {
    alert("お気に入り登録失敗")
  }
  return
}

const removeFavorite = async (
  recipeId: string,
  userId: number,
  token: string
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/recipeFavorites`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: `{
        "recipe_id": ${recipeId},
        "user_id": ${userId},
      }`,
    }
  )
  const result = await response.json()
  if (result.message != "success") {
    alert("お気に入り解除失敗")
  }
  return
}

/**
 * レシピ概要
 * @returns
 */
const RecipeFavoriteButton = (props: RecipeFavoriteButtonProps) => {
  const { className, isMyFavorite, recipeId } = props
  const [isFavorite, setIsFavorite] = useState(isMyFavorite)
  const [isOpenLoginAlert, setIsOpenLoginAlert] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  /**
   * お気に入りクリック
   */
  const handleFavoriteClick = useCallback(() => {
    const loginUser = getLoginUserFromLocalStorage()
    const token = getTokenFromLocalStorage()
    console.log(loginUser)
    if (token && loginUser) {
      // TODO エラーになる
      // if (isFavorite) {
      //   removeFavorite(recipeId, loginUser.id, token)
      // } else {
      //   addFavorite(recipeId, loginUser.id, token)
      // }

      setIsFavorite((preIsFavorite) => !preIsFavorite)
    } else {
      setIsOpenLoginAlert(true)
    }
  }, [])

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
    </>
  )
}
export default RecipeFavoriteButton
