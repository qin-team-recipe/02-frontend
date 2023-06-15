type CardSubTextProps = {
  message: string
}

/**
 * カードサブメッセージ
 * @param props
 * @returns
 */
const CardSubText = (props: CardSubTextProps) => {
  const { message } = props
  return (
    <>
      <span className="text-xs text-gray-400 dark:text-gray-400">
        {message}
      </span>
    </>
  )
}
export default CardSubText
