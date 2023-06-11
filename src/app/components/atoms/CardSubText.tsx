type CardSubTextProps = {
  message: string
}

/**
 * カードサブメッセージ
 * @param props
 * @returns
 */
export default function CardSubText(props: CardSubTextProps) {
  const { message } = props
  return (
    <>
      <span className="text-xs text-gray-400 dark:text-gray-400">
        {message}
      </span>
    </>
  )
}
