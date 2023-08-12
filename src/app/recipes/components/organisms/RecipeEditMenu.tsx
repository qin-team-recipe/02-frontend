"use client"

import { useRouter } from "next/navigation"
import React, { useState } from "react"
import {
  IoCopyOutline,
  IoEllipsisVerticalCircle,
  IoLockClosedOutline,
  IoLockOpenOutline,
  IoPencilOutline,
  IoTrashOutline,
} from "react-icons/io5"
import { useRecoilState } from "recoil"

import { recipeState } from "@/app/store/recipeState"
import {
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage,
} from "@/app/utils/localStorage"

import ModalButton from "../../commonComponents/molecules/ModalButton"
import Toast from "../../commonComponents/molecules/Toast"
import Menu, { MenuItemType } from "../../commonComponents/organisms/Menu"
import Modal from "../../commonComponents/organisms/Modal"

type RecipeEditMenuProps = {
  watchId: string
  recipeId: number
  publishedStatus: string
}

const RecipeEditMenu = (props: RecipeEditMenuProps) => {
  const { watchId, recipeId, publishedStatus } = props

  const [showToast, setShowToast] = useState(false)
  const [toastProp, setToastProp] = useState<{
    message: string
    type: "success" | "error"
  }>({
    message: "",
    type: "success",
  })
  const [isOpenDeleteConfirm, setIsOpenDeleteConfirm] = useState(false)
  const [isOpenDeleteCompleteInformation, setIsOpenDeleteCompleteInformation] =
    useState(false)
  const [storedRecipe, setStoredRecipe] = useRecoilState(recipeState)

  const router = useRouter()
  const token = getTokenFromLocalStorage()

  const MENU_WIDTH = 260
  const MENU_ITME_EDIT: MenuItemType = {
    icon: <IoPencilOutline />,
    title: "編集する",
    action: (item?: MenuItemType) => {
      router.push("/draft")
    },
  }
  const MENU_ITME_UNPUBLISH: MenuItemType = {
    icon: <IoLockClosedOutline />,
    title: "公開を停止する",
    action: (item?: MenuItemType) => {
      updatePublishStatus("private")
    },
  }
  const MENU_ITME_PUBLISH: MenuItemType = {
    icon: <IoLockOpenOutline />,
    title: "レシピを限定公開する",
    comment: "urlを知っているユーザのみ閲覧可能",
    action: (item?: MenuItemType) => {
      updatePublishStatus("public")
    },
  }
  const MENU_ITME_COPY: MenuItemType = {
    icon: <IoCopyOutline />,
    title: "URLをコピー",
    action: (item?: MenuItemType) => {
      // URLをクリップボードにコピー
      global.navigator.clipboard.writeText(location.href)
      // トースト表示
      showSuccessToast("URLをコピーしました")
    },
  }
  const MENU_ITME_DELETE: MenuItemType = {
    icon: <IoTrashOutline />,
    title: "レシピを削除する",
    action: (item?: MenuItemType) => {
      setIsOpenDeleteConfirm(true)
    },
  }

  const menuItems =
    storedRecipe?.published_status == "public"
      ? // 公開中
        [
          MENU_ITME_EDIT,
          MENU_ITME_COPY,
          MENU_ITME_UNPUBLISH,
          {
            hr: true,
          },
          MENU_ITME_DELETE,
        ]
      : // 非公開
        [
          MENU_ITME_EDIT,
          MENU_ITME_PUBLISH,
          {
            hr: true,
          },
          MENU_ITME_DELETE,
        ]

  const showSuccessToast = (message: string) => {
    setToastProp({
      message: message,
      type: "success",
    })
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 2500)
  }

  const updatePublishStatus = async (
    status: "public" | "limited" | "private"
  ) => {
    if (!token) return
    console.log("レシピ公開 type=" + status)
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/publishStatuses`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: `{
            "recipe_id": ${recipeId},
            "status": "${status}"
          }`,
        }
      )
      if (response.status == 400 || response.status == 401) {
        console.error("認証エラー")
        removeTokenFromLocalStorage()
        router.push("/favorites")
        return
      }

      console.log("レシピ公開成功")
      const message =
        status == "public"
          ? "レシピを公開しました"
          : "レシピの公開を停止しました"
      showSuccessToast(message)
      setStoredRecipe((pre) => ({ ...pre, published_status: status }))
    } catch (error) {
      console.error("レシピ公開失敗 error=" + error)
    }
    return
  }

  const handleDeleteConfirmOK = async () => {
    setIsOpenDeleteConfirm(false)
    if (!token) return
    console.error("レシピ削除")
    try {
      // TODO
      // const response = await fetch(
      //   `${process.env.NEXT_PUBLIC_API_URL}/recipes/${watchId}`,
      //   {
      //     method: "DELETE",
      //     headers: {
      //       Authorization: token,
      //     },
      //   }
      // )

      // const result = await response.json()
      // console.log(response.status)
      // if (result.message != "success") {
      //   console.error("レシピ削除失敗")
      // } else {
      console.log("レシピ削除成功")
      setIsOpenDeleteConfirm(false)
      setIsOpenDeleteCompleteInformation(true)
      // }
    } catch (error) {
      console.error("レシピ削除失敗 error=" + error)
    }
    return
  }

  const handleDeleteConfirmCancel = () => {
    setIsOpenDeleteConfirm(false)
  }
  const handleDeleteComplete = () => {
    router.push("/favorites")
  }
  return (
    <div>
      {/* メニュー */}
      <Menu menuWidth={MENU_WIDTH} menuItems={menuItems}>
        <IoEllipsisVerticalCircle className="flex h-6 w-6 rounded-full text-gray-600 hover:bg-gray-200" />
      </Menu>

      <Modal isOpen={isOpenDeleteConfirm || isOpenDeleteCompleteInformation}>
        <div className="m-2 flex flex-col items-center justify-center">
          {isOpenDeleteConfirm && (
            <>
              <div className="m-2 text-xl">レシピを削除しますか？</div>
              <div className="mt-2 flex flex-row">
                <ModalButton title="はい" onClick={handleDeleteConfirmOK} />
                <div className="m-1"></div>
                <ModalButton
                  title="いいえ"
                  onClick={handleDeleteConfirmCancel}
                />
              </div>
            </>
          )}
          {isOpenDeleteCompleteInformation && (
            <>
              <div className="m-2 text-xl">レシピを削除しました</div>
              <div className="mt-2 flex flex-row">
                <ModalButton title="OK" onClick={handleDeleteComplete} />
              </div>
            </>
          )}
        </div>
      </Modal>

      {/* トースト */}
      <Toast
        message={toastProp.message}
        type={toastProp.type}
        isShow={showToast}
      />
    </div>
  )
}

export default RecipeEditMenu
