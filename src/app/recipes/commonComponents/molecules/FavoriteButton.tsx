type FavoriteButtonProps = {
  isActive: boolean
  onClick?: () => void
  activeTitle: string
  inactiveTitle: string
  className?: string
}

/**
 * お気に入りボタン
 * @param props
 * @returns
 */
const FavoriteButton = (props: FavoriteButtonProps) => {
  const { isActive, onClick, activeTitle, inactiveTitle, className } = props

  const buttonClass = "px-1 py-1 rounded text-sm " + className + " "
  const activeButtonClass = "text-red-500 bg-white border border-red-500 "
  const inactiveButtonClass = "text-white bg-red-500 "
  return (
    <>
      <button
        className={
          buttonClass + (isActive ? activeButtonClass : inactiveButtonClass)
        }
        onClick={onClick}
      >
        {isActive ? activeTitle : inactiveTitle}
      </button>
    </>
  )
}
export default FavoriteButton
