"use client"
import React, { ReactElement, useState } from "react"

type RecipeTabsProps = {
  children: ReactElement[]
}

/**
 * レシピタブ
 * @returns
 */
const RecipeTabs = (props: RecipeTabsProps) => {
  const { children } = props
  const [tabIndex, setTabIndex] = useState(0)

  const tabComponents = [
    {
      title: "作り方",
      contents: <>{children[0]}</>,
    },
    {
      title: "材料",
      contents: <>{children[1]} </>,
    },
  ]

  return (
    <>
      {/* ヘッダー */}
      <ul className="flex text-sm font-medium text-center border-b border-gray-200 mt-2">
        {tabComponents.map((item, i) => {
          return (
            <li key={i} className="w-full">
              <RecipeTabButton
                title={item.title}
                isActive={i === tabIndex}
                onClick={() => setTabIndex(i)}
              />
            </li>
          )
        })}
      </ul>

      {/* コンテンツ */}
      {tabComponents[tabIndex].contents}
    </>
  )
}
export default RecipeTabs

/**
 *
 * @param param0 タブボタン
 * @returns
 */
const RecipeTabButton = ({
  title,
  isActive,
  onClick,
}: {
  title: string
  isActive: boolean
  onClick: () => void
}) => {
  const titleClass =
    "w-full inline-block text-black-300 text-base bg-white-500 p-2 border-b-2 hover:text-black-600 "
  const TitleSelectedClass = " font-bold border-gray-600 active"

  return (
    <button
      onClick={() => onClick()}
      className={titleClass + (isActive ? TitleSelectedClass : "")}
    >
      {title}
    </button>
  )
}
