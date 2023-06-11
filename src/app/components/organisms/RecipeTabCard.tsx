import React from "react"

import CardMainText from "../atoms/CardMainText"
import CardNumberBadge from "../atoms/CardNumberBadge"
import CardSubText from "../atoms/CardSubText"

type RecipeTabCardProps = {
  mainMessage: string
  number?: number
  rightItem?: React.JSX.Element
  subMessage?: string
}

/**
 * レシピタブリスト用のカード
 * @param props
 * @returns
 */
export default function RecipeTabCard(props: RecipeTabCardProps) {
  const { mainMessage, number, rightItem, subMessage } = props
  return (
    <>
      <div className="flex flex-col bg-white border shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] h-full min-h-8">
        <div className="flex flex-row m-2">
          {/* 番号 */}
          {number ? (
            <div className="flex-0.25 ml-2">
              <CardNumberBadge number={number} />
            </div>
          ) : null}

          <div className="flex-1 ml-2 mr-2">
            {/* メインメッセージ */}
            <div>
              <CardMainText message={mainMessage} />
            </div>
            {/* サブメッセージ */}
            <div>
              <CardSubText message={subMessage ? subMessage : ""} />
            </div>
          </div>

          {/* 右端のボタン */}
          {rightItem ? (
            <div className="flex-0.25 ml-auto flex items-center p-2">
              {rightItem}
            </div>
          ) : null}
        </div>
      </div>
    </>
  )
}
