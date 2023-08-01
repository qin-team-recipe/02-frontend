"use client"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import useFetchWithAuth from "@/app/hooks/useFetchWithAuth"
import usePost from "@/app/hooks/usePost"
import FavoriteButton from "@/app/recipes/commonComponents/molecules/FavoriteButton"
import Modal from "@/app/recipes/commonComponents/organisms/Modal"
import {
  getLoginUserFromLocalStorage,
  getTokenFromLocalStorage,
  setPathGoAfterLoginToLocalStorage,
} from "@/app/utils/localStorage"

type ChefFollowButtonProps = {
  className?: string
  chefId: number
}

/**
 * シェフフォローボタン
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

  const {
    data: fetchData,
    isLoading,
    error,
  } = useFetchWithAuth(`/chefFollows?user_id=${loginUser.id}`)
  const {
    doPost: addFollowPost,
    isLoading: isLoadingAddFollow,
    error: errorAddFollow,
    isAuthError: isAuthErrorAddFollow,
  } = usePost(
    "POST",
    "/chefFollows",
    `
  {
    "chef_id": ${chefId},
    "user_id": ${loginUser.id}
  }`
  )
  const {
    doPost: removeFollowPost,
    isLoading: isLoadingRemoveFollow,
    error: errorRemoveFollow,
    isAuthError: isAuthErrorRemoveFollow,
  } = usePost(
    "DELETE",
    "/chefFollows",
    `
  {
    "chef_id": ${chefId},
    "user_id": ${loginUser.id}
  }`
  )
  useEffect(() => {
    const checkFavorites = async () => {
      if (!fetchData) return
      const favorites: { chef_id: number }[] = fetchData
      const isMyFavorite =
        favorites.find((el: { chef_id: number }) => el.chef_id == chefId) !=
        undefined
      setIsFavorite(isMyFavorite)
    }
    checkFavorites()
  }, [chefId, fetchData])

  useEffect(() => {
    if (isAuthErrorAddFollow || isAuthErrorRemoveFollow)
      setIsOpenAuthErrorAlert(true)
  }, [isAuthErrorAddFollow, isAuthErrorRemoveFollow])

  /**
   * お気に入りクリック
   */
  const handleFavoriteClick = () => {
    if (token && loginUser) {
      if (isFavorite) {
        removeFollowPost()
      } else {
        addFollowPost()
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
