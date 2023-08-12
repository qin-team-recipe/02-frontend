"use client"
import React from "react"

type PrimaryButtonProps = {
  title: string
  onClick?: () => void
  disabled?: boolean
}

/**
 * プライマリボタン
 * @param props
 * @returns
 */
const PrimaryButton = (props: PrimaryButtonProps) => {
  const { title, onClick, disabled } = props

  return (
    <>
      {disabled ? (
        <button className="w-full">
          <div className="rounded border border-gray-300 bg-gray-100 p-1 text-center text-sm text-gray-400 ">
            {title}
          </div>
        </button>
      ) : (
        <button className="w-full" onClick={onClick}>
          <div className="rounded border border-red-500 bg-red-500 p-1 text-center text-sm text-white hover:bg-red-600">
            {title}
          </div>
        </button>
      )}
    </>
  )
}
export default PrimaryButton
