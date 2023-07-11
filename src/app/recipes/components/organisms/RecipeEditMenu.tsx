"use client"

import React, { useState } from "react"
import {
  IoCopyOutline,
  IoEllipsisVertical,
  IoLockClosedOutline,
  IoLockOpenOutline,
  IoPencilOutline,
  IoTrashOutline,
} from "react-icons/io5"

import { MenuItemType } from "../../[id]/type"
import Toast from "../../commonComponents/molecules/Toast"
import Menu from "../../commonComponents/organisms/Menu"

const RecipeEditMenu = () => {
  const [showToast, setShowToast] = useState(false)
  const [toastProp, setToastProp] = useState<{
    message: string
    type: "success" | "error"
  }>({
    message: "",
    type: "success",
  })

  const MENU_WIDTH = 320
  const MENU_ITMES: MenuItemType[] = [
    {
      icon: <IoPencilOutline />,
      title: "編集する",
      comment: undefined,
      hr: false,
      action: (item?: MenuItemType) => {
        // TODO
        alert("レシピ下書き画面へ遷移")
      },
    },
    {
      icon: <IoLockClosedOutline />,
      title: "公開を停止する",
      comment: undefined,
      hr: false,
      action: (item?: MenuItemType) => {
        // TODO
        alert("公開を停止")
      },
    },
    {
      icon: <IoLockOpenOutline />,
      title: "レシピを限定公開する",
      comment: "urlを知っているユーザのみ閲覧可能",
      hr: false,
      action: (item?: MenuItemType) => {
        // TODO
        alert("公開")
      },
    },
    {
      icon: <IoCopyOutline />,
      title: "URLをコピー",
      comment: undefined,
      hr: false,
      action: (item?: MenuItemType) => {
        // TODO
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
    },
    {
      icon: undefined,
      title: undefined,
      comment:
        "※ 公開に関して、公開中は下の2つのメニューを非表示にし、非公開中は「公開を停止する」を非表示にする",
      hr: true,
    },
    {
      icon: <IoTrashOutline />,
      title: "レシピを削除する",
      comment: undefined,
      hr: false,
      action: (item?: MenuItemType) => {
        item && alert(item.title)
      },
    },
  ]

  return (
    <div>
      {/* メニュー */}
      <Menu menuWidth={MENU_WIDTH} menuItems={MENU_ITMES}>
        <div className="text-2xl text-gray-600">
          <IoEllipsisVertical />
        </div>
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
