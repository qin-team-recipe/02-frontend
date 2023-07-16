"use client"

import React, { ReactElement, useState } from "react"
import {
  IoCopyOutline,
  IoEllipsisVertical,
  IoLockClosedOutline,
  IoLockOpenOutline,
  IoPencilOutline,
  IoTrashOutline,
} from "react-icons/io5"

import Toast from "../molecules/Toast"

type MenuItemType = {
  icon?: ReactElement
  title?: string
  comment?: string
  hr?: boolean
  action?: (item?: MenuItemType) => void
}

const RecipeEditMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
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

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsOpen((pre) => !pre)
  }

  return (
    <div className="absolute">
      {/* メニューボタン */}
      <button
        className="relative right-8 text-2xl text-gray-600"
        onClick={handleClick}
      >
        <IoEllipsisVertical />
      </button>

      {/* メニュー */}
      {isOpen && (
        <div
          className=" relative mt-2"
          style={{ right: MENU_WIDTH - 10, width: MENU_WIDTH }}
        >
          <ul className="rounded border border-gray-300 bg-white px-2 py-2 shadow">
            {/* メニューアイテムリスト */}
            {MENU_ITMES.map((item, i) => (
              <li
                key={i}
                className={
                  "rounded py-2 transition-colors duration-300 " +
                  (item.action && "hover:bg-blue-50 active:bg-indigo-200")
                }
                onClick={() => {
                  if (item.action) {
                    item.action(item)
                    setIsOpen(false)
                  }
                }}
              >
                <div className="flex flex-row items-start text-sm">
                  {/* アイコン */}
                  <p className="pt-0.5">{item.icon}</p>
                  <div className="pl-1">
                    {/* タイトル */}
                    {item.title}
                    {/* コメント */}
                    <div className="text-xs">{item.comment}</div>
                  </div>
                </div>
                {/* セパレータ */}
                {item.hr && <hr className="mt-2 border border-gray-300" />}
              </li>
            ))}
          </ul>
        </div>
      )}

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
