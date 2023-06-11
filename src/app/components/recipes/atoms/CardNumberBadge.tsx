type CardNumberBadgeProps = {
  number: number
}

/**
 * カード番号バッジ
 * @param props
 * @returns
 */
export default function CardNumberBadge(props: CardNumberBadgeProps) {
  const { number } = props
  return (
    <>
      <div className="flex items-center justify-center w-5 h-5 bg-red-500 rounded-full text-white">
        {number}
      </div>
    </>
  )
}
