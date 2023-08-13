type CardNumberBadgeProps = {
  number: number
}

/**
 * カード番号バッジ
 * @param props
 * @returns
 */
const CardNumberBadge = (props: CardNumberBadgeProps) => {
  const { number } = props
  return (
    <>
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white">
        {number}
      </div>
    </>
  )
}
export default CardNumberBadge
