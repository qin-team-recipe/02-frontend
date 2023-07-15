"use client"

import React, { ReactElement, useState } from "react"

export type MenuItemType = {
  icon?: ReactElement
  title?: string
  comment?: string
  hr?: boolean
  action?: (item?: any) => void
}

type MenuProps = {
  menuWidth: number
  menuItems: MenuItemType[]
  children: ReactElement
}

const Menu = (props: MenuProps) => {
  const { menuWidth, menuItems, children } = props
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuButtonClick = () => {
    setIsOpen((pre) => !pre)
  }
  const handleMenuItemClick = (item: MenuItemType) => {
    setIsOpen((pre) => !pre)
    item.action && item.action(item)
  }

  const menuStyle = {
    width: `${menuWidth}px`,
  }

  return (
    <>
      {/* メニューボタン */}
      <button className="relative" onClick={handleMenuButtonClick}>
        {children}
      </button>

      {isOpen && (
        <>
          {/* 背景 */}
          <div
            className="fixed left-0 top-0 z-10 h-full w-full"
            onClick={handleMenuButtonClick}
          />
          {/* メニュー */}
          <div className="absolute right-1 z-20 mt-1" style={menuStyle}>
            <ul className="rounded border border-gray-300 bg-white px-2 py-2 shadow">
              {/* メニューアイテムリスト */}
              {menuItems.map((item, i) => (
                <li
                  key={i}
                  className={
                    "rounded py-2 transition-colors duration-300 " +
                    (item.action && "hover:bg-blue-50 active:bg-indigo-200")
                  }
                  onClick={() => handleMenuItemClick(item)}
                >
                  <div className="flex flex-row items-start justify-start text-sm">
                    {/* アイコン */}
                    {item.icon && <div className="pt-0.5">{item.icon}</div>}
                    {item.title ? (
                      <div className="flex flex-col items-start justify-start pl-1">
                        {/* タイトル */}
                        <div>{item.title}</div>
                        {/* コメント */}
                        <>
                          {item.comment && (
                            <div className="text-left text-xs">
                              {item.comment}
                            </div>
                          )}
                        </>
                      </div>
                    ) : (
                      <>
                        {/* コメント */}
                        {item.comment && (
                          <div className="text-left text-xs">
                            {item.comment}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  {/* セパレータ */}
                  {item.hr && <hr className="mt-2 border border-gray-300" />}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  )
}

export default Menu
