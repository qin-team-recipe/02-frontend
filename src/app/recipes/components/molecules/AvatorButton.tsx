import React from "react"

type AvatorButtonProps = {
  name: string
  className?: string
  onClick?: () => void
  src?: string
}

/**
 * アバターボタン
 * @param props
 * @returns
 */
const AvatorButton = (props: AvatorButtonProps) => {
  const { name, className, onClick, src } = props
  return (
    <>
      <div className={className ? className : ""}>
        <button
          className="flex flex-row justify-center items-center"
          onClick={onClick}
        >
          <img className="w-10 h-10 rounded-full" src={src} alt={name} />
          <p className="ml-2">{name}</p>
        </button>
      </div>
    </>
  )
}
export default AvatorButton
