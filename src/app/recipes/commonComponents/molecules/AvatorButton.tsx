type AvatorButtonProps = {
  name?: string
  onClick?: () => void
  src?: string
  size?: number
}

/**
 * アバターボタン
 * @param props
 * @returns
 */
const AvatorButton = (props: AvatorButtonProps) => {
  const { name, onClick, src, size } = props
  let avatorSize = size && size > 0 ? size : 50

  return (
    <>
      <button
        className="flex flex-row items-center justify-center"
        onClick={onClick}
      >
        {src && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="rounded-full"
            src={src}
            alt={name}
            style={{ width: avatorSize, height: avatorSize }}
          />
        )}
        {name && <p className="ml-2">{name}</p>}
      </button>
    </>
  )
}
export default AvatorButton
