"use client"

import React, { useState } from "react"
import { useFormContext } from "react-hook-form"

import { DraftSchema } from "../draftSchema"

export const Counter = () => {
  const { setValue } = useFormContext<DraftSchema>()
  const [count, setCount] = useState(2)

  const increment = () => {
    if (count < 6) {
      const newCount = count + 1
      setCount(newCount)
      setValue("servings", newCount)
    }
  }

  const decrement = () => {
    if (count > 1) {
      const newCount = count - 1
      setCount(newCount)
      setValue("servings", newCount)
    }
  }

  return (
    <>
      <div className="mb-1 flex h-[19px] px-[16px]">
        <div className="mr-[6.67px] w-24 text-[16px] font-bold">
          材料/{count}人前
        </div>
        <button
          className={`flex h-5 w-5 items-center justify-center text-[16px] ${
            count === 1 ? "text-gray-400" : "bg-red-100 text-red-500"
          }`}
          onClick={decrement}
        >
          -
        </button>
        <button
          className={`ml-2 flex h-5 w-5 items-center justify-center text-[16px] ${
            count === 6 ? "text-gray-400" : "bg-red-100 text-red-500"
          }`}
          onClick={increment}
        >
          +
        </button>
      </div>
    </>
  )
}
