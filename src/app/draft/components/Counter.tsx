"use client"

import React, { useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(1)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <div className="h-[19px] px-[16px] flex mb-1">
        <div className="font-bold text-[16px] mr-[6.67px]">
          材料/{count}人前
        </div>
        <button
          className={`h-[16px] ${count === 1 ? "text-gray-400" : ""}`}
          onClick={decrement}
        >
          -
        </button>
        <button className="h-[16px]" onClick={increment}>
          +
        </button>
      </div>
    </>
  )
}
