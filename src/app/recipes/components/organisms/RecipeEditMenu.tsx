"use client"

import React, { useState } from "react"
import {
  IoCopyOutline,
  IoEllipsisVerticalCircle,
  IoLockClosedOutline,
  IoLockOpenOutline,
  IoPencilOutline,
  IoTrashOutline,
} from "react-icons/io5"

import Toast from "../../commonComponents/molecules/Toast"
import Menu, { MenuItemType } from "../../commonComponents/organisms/Menu"

type RecipeEditMenuProps = {
  isPublished: boolean
}

const RecipeEditMenu = (props: RecipeEditMenuProps) => {
  const { isPublished } = props

  const [showToast, setShowToast] = useState(false)
  const [toastProp, setToastProp] = useState<{
    message: string
    type: "success" | "error"
  }>({
    message: "",
    type: "success",
  })

  const MENU_WIDTH = 260

  const MENU_ITME_EDIT: MenuItemType = {
    icon: <IoPencilOutline />,
    title: "編集する",
    action: (item?: MenuItemType) => {
      // TODO
      alert("レシピ下書き画面へ遷移")
    },
  }
  const MENU_ITME_UNPUBLISH: MenuItemType = {
    icon: <IoLockClosedOutline />,
    title: "公開を停止する",
    action: (item?: MenuItemType) => {
      // TODO
      alert("公開を停止")
    },
  }
  const MENU_ITME_PUBLISH: MenuItemType = {
    icon: <IoLockOpenOutline />,
    title: "レシピを限定公開する",
    comment: "urlを知っているユーザのみ閲覧可能",
    action: (item?: MenuItemType) => {
      // TODO
      alert("公開")
    },
  }
  const MENU_ITME_COPY: MenuItemType = {
    icon: <IoCopyOutline />,
    title: "URLをコピー",
    action: (item?: MenuItemType) => {
      // URLをクリップボードにコピー
      global.navigator.clipboard.writeText(location.href)
      // トースト表示
      setToastProp({
        message: "URLをコピーしました",
        type: "success",
      })
      setShowToast(true)
      setTimeout(() => {
        setShowToast(false)
      }, 2500)
    },
  }
  const MENU_ITME_DELETE: MenuItemType = {
    icon: <IoTrashOutline />,
    title: "レシピを削除する",
    action: (item?: MenuItemType) => {
      item && alert(item.title)
    },
  }

  const menuItems = isPublished
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

  return (
    <div>
      {/* メニュー */}
      <Menu menuWidth={MENU_WIDTH} menuItems={menuItems}>
        <IoEllipsisVerticalCircle className="flex h-6 w-6 rounded-full text-gray-600 hover:bg-gray-200" />
      </Menu>

      {/* トースト */}
      <Toast
        message={toastProp.message}
        type={toastProp.type}
        showToast={showToast}
      />
    </div>
  )
}

export default RecipeEditMenu
