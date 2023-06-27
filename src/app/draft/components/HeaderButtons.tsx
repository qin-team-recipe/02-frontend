"use client"

import Link from "next/link"
import { ChangeEvent, useState } from "react"

export const HeaderButtons = () => {
  const [inputValue, setValue] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleClearInput = () => {
    setValue("") // inputの入力値を空にする
  }
  const [showModal, setShowModal] = useState(false)

  const handleDeleteClick = () => {
    setShowModal(true)
  }

  const handleSaveClick = () => {
    // 保存の処理を追加する
    setShowModal(false) // モーダルを非表示にする
  }

  const handleDeleteConfirmClick = () => {
    handleClearInput()
    setShowModal(false) // モーダルを非表示にする
  }

  const handleDeleteCancelClick = () => {
    setShowModal(false) // モーダルを非表示にする
  }
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg p-8">
            <h2>保存または削除しますか？</h2>
            <div className="flex justify-end mt-4">
              <button onClick={handleSaveClick} className="mr-2">
                保存
              </button>
              <button onClick={handleDeleteConfirmClick}>
                <Link href="/favorites">削除</Link>
              </button>
              <button onClick={handleDeleteCancelClick} className="ml-2">
                キャンセル
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="py-[12px] px-[16px] border-b-2">
        <div className="flex justify-between h-[48px]">
          {inputValue ? (
            <div
              className="h-[24px] w-[24px] cursor-pointer"
              onClick={handleDeleteClick}
            >
              ×
            </div>
          ) : (
            <div></div>
          )}
          <div className="flex justify-end">
            {!inputValue ? (
              <div className="h-[24px] w-[48px] mr-[16px] font-bold text-[16px] hover:text-red-500">
                <Link href="../draft/addDraft">下書き</Link>
              </div>
            ) : (
              <div className="h-[24px] w-[48px] mr-[16px] font-bold text-[16px] text-gray-400"></div>
            )}
            {inputValue ? (
              <div className="h-[24px] w-[64px] font-bold text-[16px] hover:text-red-500">
                <Link href="/">作成する</Link>
              </div>
            ) : (
              <div className="h-[24px] w-[64px] font-bold text-[16px] text-gray-400">
                作成する
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="pt-[20px]">
        <div className="h-[67px]">
          <div className="h-[19px]">
            <div className="px-[16px] font-bold">レシピ名</div>
          </div>
          <div className="h-[44px]">
            <div>
              <form>
                <input
                  className="pt-[13px] pb-[12px] w-full pl-[19.54px] border-y-2 border-x-2"
                  type="text"
                  value={inputValue}
                  onChange={handleChange}
                  placeholder="例：肉じゃが"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
