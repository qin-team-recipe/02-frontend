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
          <>
            <div className="group relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="rounded-full transition-opacity group-hover:opacity-70"
                src={src}
                alt={name}
                style={{ width: avatorSize, height: avatorSize }}
              />
              <div className="flex flex-row items-center justify-end p-1 text-sm text-white"></div>
            </div>
          </>
        )}
        {name && <p className="ml-2">{name}</p>}
      </button>
    </>
  )
}
export default AvatorButton
