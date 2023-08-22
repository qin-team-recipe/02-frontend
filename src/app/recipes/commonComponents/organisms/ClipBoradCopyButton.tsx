"use client"
import { useCallback, useState } from "react"
import { IoCopyOutline } from "react-icons/io5"

import Toast from "../molecules/Toast"

type ClipBoradCopyButtonProps = {
  contents: string
  message?: string
}

const ClipBoradCopyButton = (props: ClipBoradCopyButtonProps) => {
  const { contents, message } = props
  const [showToast, setShowToast] = useState(false)

  const handleClick = useCallback(() => {
    // クリップボードにコピー
    global.navigator.clipboard.writeText(contents)
    // トースト表示
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 2500)
  }, [contents])

  const copyMessage = message ?? "コピーしました"

  if (!contents) return <></>

  return (
    <>
      <button onClick={handleClick}>
        <div className="flex flex-row items-center justify-start text-sm text-blue-500">
          <IoCopyOutline />
          コピーする
        </div>
      </button>

      {/* トースト */}
      <Toast message={copyMessage} isShow={showToast} />
    </>
  )
}
export default ClipBoradCopyButton
