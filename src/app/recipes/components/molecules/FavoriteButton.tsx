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

  const buttonClass =
    "transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full shadow-lg text-white flex items-center justify-center "
  const activeButtonClass = "bg-red-500 "
  const inactiveButtonClass = "bg-gray-400"
  return (
    <>
      <div className={className ? className : ""}>
        <button
          className={
            buttonClass + (isActive ? activeButtonClass : inactiveButtonClass)
          }
          onClick={onClick}
        >
          {/* TODO アイコン決定前なので暫定的に文字で表現 */}♡
        </button>
      </div>
    </>
  )
}
export default FavoriteButton
