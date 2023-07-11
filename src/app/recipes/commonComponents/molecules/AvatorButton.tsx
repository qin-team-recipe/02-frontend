type AvatorButtonProps = {
  name?: string
  onClick?: () => void
  src?: string
}

/**
 * アバターボタン
 * @param props
 * @returns
 */
const AvatorButton = (props: AvatorButtonProps) => {
  const { name, onClick, src } = props
  return (
    <>
      <button
        className="flex flex-row items-center justify-center"
        onClick={onClick}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="h-12 w-12 rounded-full" src={src} alt={name} />
        {name && <p className="ml-2">{name}</p>}
      </button>
    </>
  )
}
export default AvatorButton
