"use client"

import React, { useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(1)

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
      <div className="h-[19px] px-[16px] flex mb-1">
        <div className="font-bold text-[16px] w-24 mr-[6.67px]">
          材料/{count}人前
        </div>
        <button
          className={`text-[16px] h-5 w-5 flex justify-center item-center ${
            count === 1 ? "text-gray-400" : "text-red-500 bg-red-200"
          }`}
          onClick={decrement}
        >
          -
        </button>
        <button
          className={`ml-2 text-[16px] h-5 w-5 flex justify-center item-center ${
            count === 6 ? "text-gray-400" : "text-red-500 bg-red-200"
          }`}
          onClick={increment}
        >
          +
        </button>
      </div>
    </>
  )
}
