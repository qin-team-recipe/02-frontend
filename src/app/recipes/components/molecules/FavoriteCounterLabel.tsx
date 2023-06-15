type FavoriteCounterLabelProps = {
  className?: string
  count?: number
}

/**
 * お気に入り件数ラベル
 * @param props
 * @returns
 */
const FavoriteCounterLabel = (props: FavoriteCounterLabelProps) => {
  const { className, count } = props
  return (
    <>
      <div className={className ? className : ""}>
        <span className="flex align-text-bottom">
          {/* お気に入り件数 */}
          <p className="font-bold text-sm">{count ? count : 0}</p>

          {/* お気に入りラベル */}
          <p className="ml-2 text-sm text-gray-400 dark:text-gray-400">
            お気に入り
          </p>
        </span>
      </div>
    </>
  )
}
export default FavoriteCounterLabel
