"use client"
import React, { Suspense, useState } from "react"

import LoadingSpinner from "../molecules/LoadingSpinner"
import RecipeTabCookingProcess from "./RecipeTabCookingProcess"
import RecipeTabIngredients from "./RecipeTabIngredients"

type RecipeTabsProps = {
  id: string
}

/**
 * レシピタブ
 * @returns
 */
export default function RecipeTabs(props: RecipeTabsProps) {
  const { id } = props
  const [tabIndex, setTabIndex] = useState(0)
  const tabComponents = [
    {
      title: "作り方",
      contents: (
        <>
          <RecipeTabCookingProcess id={id} />
        </>
      ),
    },
    {
      title: "材料",
      contents: (
        <>
          <RecipeTabIngredients id={id} />
        </>
      ),
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
      <Suspense fallback={<LoadingSpinner />}>
        {tabComponents[tabIndex].contents}
      </Suspense>
    </>
  )
}

/**
 *
 * @param param0 タブボタン
 * @returns
 */
export function RecipeTabButton({
  title,
  isActive,
  onClick,
}: {
  title: string
  isActive: boolean
  onClick: () => void
}) {
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
