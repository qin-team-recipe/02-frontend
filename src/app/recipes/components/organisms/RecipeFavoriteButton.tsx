"use client"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import useFetchWithAuth from "@/app/hooks/useFetchWithAuth"
import usePost from "@/app/hooks/usePost"
import {
  getLoginUserFromLocalStorage,
  getTokenFromLocalStorage,
  setPathGoAfterLoginToLocalStorage,
} from "@/app/utils/localStorage"

import { RecipeFavoritesDataType } from "../../[id]/type"
import FavoriteButton from "../../commonComponents/molecules/FavoriteButton"
import ModalButton from "../../commonComponents/molecules/ModalButton"
import Modal from "../../commonComponents/organisms/Modal"

type RecipeFavoriteButtonProps = {
  className?: string
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

  const {
    data: dataFetch,
    isLoading: isLoadingFetch,
    error: errorFetch,
    isAuthError: isAuthErrorFetch,
  } = useFetchWithAuth(`/recipeFavorites?user_id=${loginUser?.id}`)
  const {
    doPost: addFavoritePost,
    isLoading: isLoadingAddFavorite,
    error: errorAddFavorite,
    isAuthError: isAuthErrorAddFavorite,
  } = usePost(
    "POST",
    "/recipeFavorites",
    `{
      "recipe_id": ${recipeId},
      "user_id": ${loginUser?.id}
    }`
  )
  const {
    doPost: removeFavoritePost,
    isLoading: isLoadingRemoveFavorite,
    error: errorRemoveFavorite,
    isAuthError: isAuthErrorRemoveFavorite,
  } = usePost(
    "DELETE",
    "/recipeFavorites",
    `{
      "recipe_id": ${recipeId},
      "user_id": ${loginUser?.id}
    }`
  )

  useEffect(() => {
    const checkFavorites = async () => {
      if (!dataFetch) return
      const data: RecipeFavoritesDataType = dataFetch
      const isMyFavorite =
        data.lists.find(
          (el: { recipe_id: number }) => el.recipe_id == Number(recipeId)
        ) != undefined
      setIsFavorite(isMyFavorite)
    }
    checkFavorites()
  }, [recipeId, dataFetch])

  useEffect(() => {
    if (isAuthErrorAddFavorite || isAuthErrorRemoveFavorite)
      setIsOpenAuthErrorAlert(true)
  }, [isAuthErrorAddFavorite, isAuthErrorRemoveFavorite])

  /**
   * お気に入りクリック
   */
  const handleFavoriteClick = () => {
    if (token && loginUser) {
      if (isFavorite) {
        removeFavoritePost()
      } else {
        addFavoritePost()
      }

      setIsFavorite((preIsFavorite) => !preIsFavorite)
    } else {
      setIsOpenLoginAlert(true)
    }
  }

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
            <ModalButton
              title="ログイン画面へ"
              onClick={gotoLogin}
              size={140}
            />
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
            <ModalButton
              title="ログイン画面へ"
              onClick={gotoLogin}
              size={140}
            />
          </div>
        </div>
      </Modal>
    </>
  )
}
export default RecipeFavoriteButton
