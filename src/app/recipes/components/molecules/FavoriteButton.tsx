type FavoriteButtonProps = {
  className?: string
  isActive: boolean
  onClick?: () => void
}

/**
 * お気に入りボタン
 * @param props
 * @returns
 */
const FavoriteButton = (props: FavoriteButtonProps) => {
  const { className, isActive, onClick } = props

  const buttonClass = "px-1 py-1 rounded text-sm "
  const activeButtonClass = "text-red-500 bg-white border border-red-500 "
  const inactiveButtonClass = "text-white bg-red-500 "
  return (
    <>
      <div className={className ? className : ""}>
        <button
          className={
            buttonClass + (isActive ? activeButtonClass : inactiveButtonClass)
          }
          onClick={onClick}
        >
          {isActive ? "お気に入りから削除" : "お気に入りに追加"}
        </button>
      </div>
    </>
  )
}
export default FavoriteButton
