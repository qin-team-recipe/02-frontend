"use client"

import React, { useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(2)

  const increment = () => {
    if (count < 6) {
      setCount(count + 1)
    }
  }

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <div className="mb-1 flex h-[19px] px-[16px]">
        <div className="mr-[6.67px] w-24 text-[16px] font-bold">
          材料/{count}人前
        </div>
        <button
          className={`item-center flex h-5 w-5 justify-center text-[16px] ${
            count === 1 ? "text-gray-400" : "bg-red-200 text-red-500"
          }`}
          onClick={decrement}
        >
          -
        </button>
        <button
          className={`item-center ml-2 flex h-5 w-5 justify-center text-[16px] ${
            count === 6 ? "text-gray-400" : "bg-red-200 text-red-500"
          }`}
          onClick={increment}
        >
          +
        </button>
      </div>
    </>
  )
}
