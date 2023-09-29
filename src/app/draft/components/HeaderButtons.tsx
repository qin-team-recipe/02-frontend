"use client"

import Link from "next/link"
import { useState } from "react"
import { useFormContext } from "react-hook-form"

import { DraftSchema } from "../draftSchema"

export const HeaderButtons = () => {
  const {
    register,
    getValues,
    watch,
    formState: { errors },
  } = useFormContext<DraftSchema>()
  const title = watch("title")

  const [showModal, setShowModal] = useState(false)

  const handleDeleteClick = () => {
    setShowModal(true)
  }

  const handleSaveClick = () => {
    // 保存の処理を追加する
    setShowModal(false) // モーダルを非表示にする
  }

  const handleDeleteConfirmClick = () => {
    setShowModal(false) // モーダルを非表示にする
  }

  const handleDeleteCancelClick = () => {
    setShowModal(false) // モーダルを非表示にする
  }
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="rounded-lg bg-white p-8">
            <h2>保存または削除しますか？</h2>
            <div className="mt-4 flex justify-end">
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
      <div className="border-b-2 px-[16px] py-[12px]">
        <div className="flex h-[48px] justify-between">
          {title ? (
            <div
              className="my-5 h-[24px] w-[24px] cursor-pointer"
              onClick={handleDeleteClick}
            >
              ×
            </div>
          ) : (
            <div></div>
          )}
          <div className="flex justify-end">
            {!title ? (
              <div className="my-5 mr-[16px] w-[100px] items-center text-center text-[16px] font-bold hover:text-red-500">
                <Link href="../draft/addDraft">下書き一覧</Link>
              </div>
            ) : (
              <div className="my-5 mr-[16px] w-[100px] items-center text-center text-[16px] font-bold text-gray-400">
                下書き一覧
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="pt-[20px]">
        <div className="h-[67px]">
          <div className="mb-1 h-[19px]">
            <div className="px-[16px] font-bold">レシピ名</div>
          </div>
          <div className="h-[44px]">
            <div>
              <input
                {...register("title")}
                className="w-full border-y-2 pb-[12px] pl-[19.54px] pt-[13px]"
                type="text"
                placeholder="例：肉じゃが"
              />
              {errors.title ? (
                <div className="text-red-500">{errors.title.message}</div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
