"use client"
import React from "react"

type SecondaryButtonProps = {
  title: string
  onClick?: () => void
  disabled?: boolean
}

/**
 * セカンダリボタン
 * @param props
 * @returns
 */
const SecondaryButton = (props: SecondaryButtonProps) => {
  const { title, onClick } = props

  return (
    <>
      <button className="w-full" onClick={onClick}>
        <div className="rounded border border-red-500 bg-white p-1 text-center text-sm text-red-500 hover:bg-red-50">
          {title}
        </div>
      </button>
    </>
  )
}
export default SecondaryButton
