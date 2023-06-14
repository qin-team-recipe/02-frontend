type CardMainTextProps = {
  message: string
}

/**
 * カードメインメッセージ
 * @param props
 * @returns
 */
const CardMainText = (props: CardMainTextProps) => {
  const { message } = props
  return (
    <>
      <span className="text-sm text-gray-800 dark:text-white">{message}</span>
    </>
  )
}
export default CardMainText
