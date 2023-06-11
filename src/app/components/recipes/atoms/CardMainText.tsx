type CardMainTextProps = {
  message: string
}

/**
 * カードメインメッセージ
 * @param props
 * @returns
 */
export default function CardMainText(props: CardMainTextProps) {
  const { message } = props
  return (
    <>
      <span className="text-sm text-gray-800 dark:text-white">{message}</span>
    </>
  )
}
