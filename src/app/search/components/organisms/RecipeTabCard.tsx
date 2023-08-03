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
const RecipeTabCard = (props: RecipeTabCardProps) => {
  const { mainMessage, number, rightItem, subMessage } = props
  return (
    <>
      <div className="min-h-8 flex h-full flex-col border bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:shadow-slate-700/[.7]">
        <div className="m-2 flex flex-row">
          {/* 番号 */}
          {number ? (
            <div className="flex-0.25 ml-2">
              <CardNumberBadge number={number} />
            </div>
          ) : null}

          <div className="ml-2 mr-2 flex-1">
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
export default RecipeTabCard
