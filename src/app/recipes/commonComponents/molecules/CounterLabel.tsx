import React from "react"

type CounterLabelProps = {
  className?: string
  count?: number
  label?: string
}

/**
 * 件数ラベル
 * @param props
 * @returns
 */
const CounterLabel = (props: CounterLabelProps) => {
  const { className, count, label } = props
  return (
    <div className={className && className}>
      <div className="flex align-text-bottom">
        {/* 件数 */}
        <p className="text-sm font-bold">{count}</p>
        {/* ラベル */}
        <p className="ml-2 text-sm text-gray-400 dark:text-gray-400">{label}</p>
      </div>
    </div>
  )
}
export default CounterLabel
