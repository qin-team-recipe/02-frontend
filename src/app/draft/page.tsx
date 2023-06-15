"use client"

import Link from "next/link"
import { ChangeEvent, useState } from "react"

import { ChooseNumbers } from "./components/chooseNumbers"

const Draft = () => {
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

  //画像追加
  const [image, setImage] = useState("")

  const handleImageAdd = () => {
    // 画像追加の処理
    // 例えば、ファイルの選択ダイアログを表示して画像を選択し、その画像を表示するような処理を実装します
    // ここでは仮の実装として、固定の画像パスを使用しています
    const imagePath = "path/to/image.jpg"
    setImage(imagePath)
  }

  return (
    <>
      <div className="h-auto w-[390px]">
        {showModal && (
          <div className="fixed top-1/2 left-0 w-[390px] h-[150px] flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="p-4 rounded">
              <h2>保存または削除しますか？</h2>
              <div className="flex justify-end mt-4">
                <button onClick={handleSaveClick} className="mr-2">
                  保存
                </button>
                <button onClick={handleDeleteConfirmClick}>
                  <Link href="/">削除</Link>
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
        <div className="h-[148px] pt-[32px]">
          <ChooseNumbers />
          <div className="h-[49px] border-t-2">
            <div className="py-[8px] px-[16px] border-b-2">
              <div className="h-[17px] mb-[4px] text-[14px]">キャベツ</div>
              <div className="h-[12px] text-[10px]">5〜6枚</div>
            </div>
          </div>
          <div className="h-[49px]">
            <div className="py-[8px] px-[16px] border-b-2">
              <div className="h-[17px] mb-[4px] text-[14px]">チーズ</div>
              <div className="h-[12px] text-[10px]">ピザ用</div>
            </div>
          </div>
          <div className="h-[27px]">
            <div className="pt-[8px] px-4 flex text-red-400">
              <div className="h-4 w-4">+</div>
              <h3 className="pl-[4px] text-[16px] h-[19px] w-[119px]">
                <Link href="/draft/addMaterial">材料を追加する</Link>
              </h3>
            </div>
          </div>
          <div className="pt-8 h-[294px]">
            <div className="pl-4 mb-[4px] h-[19px]">
              <div className="w-[48px] font-bold text-[16px]">作り方</div>
            </div>
            <div className="h-[271px] flex border-y-2">
              <div className="ml-[16px] mt-[10px] mb-[96px] mr-[11px] w-[60px] h-[18px] rounded-full bg-red-600 flex items-center justify-center">
                <span className="text-white">1</span>
              </div>
              <div>
                <div className="h-[54px] w-[332px] text-[14px] mr-[16px] mt-[8px] mb-[4px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </div>
                <div className="text-[10px] h-[48px] text-gray-500">
                  ※Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dicta, nobis qui velit sit ratione dolorem placeat cum illo
                  doloribus dolorum, tempora natus veritatis asperiores. Iusto
                  maiores natus rem fugiat hic.
                </div>
              </div>
            </div>
            <div className="h-[271px] flex border-b-2">
              <div className="ml-[16px] mt-[10px] mb-[96px] mr-[11px] w-[60px] h-[18px] rounded-full bg-red-600 flex items-center justify-center">
                <span className="text-white">1</span>
              </div>
              <div>
                <div className="h-[54px] w-[332px] text-[14px] mr-[16px] mt-[8px] mb-[4px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </div>
                <div className="text-[10px] h-[48px] text-gray-500">
                  ※Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dicta, nobis qui velit sit ratione dolorem placeat cum illo
                  doloribus dolorum, tempora natus veritatis asperiores. Iusto
                  maiores natus rem fugiat hic.
                </div>
              </div>
            </div>
            <div className="h-[27px] flex text-red-400">
              <div className="ml-4 mr-1 mt-[9px] h-4 w-4">+</div>
              <div className="h-[19px] w-[112px] text-[16px] mt-[8px]">
                <Link href="../draft/addProcess">工程を追加する</Link>
              </div>
            </div>
            <div className="h-[150px]">
              <div className="h-[19px] mt-[32px] mx-[16px] font-bold text-[16px]">
                画像
              </div>
              <div className="h-[127px]">
                <div className="flex">
                  {image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={image} alt="" className="h-full" />
                  ) : (
                    <div>※画像入れ込む※</div>
                  )}
                </div>
              </div>
              <div className="h-[27px] flex text-red-400">
                <div
                  className="ml-4 mr-1 mt-[9px] h-4 w-4"
                  onClick={handleImageAdd}
                >
                  +
                </div>
                <div className="h-[19px] w-[112px] text-[16px] mt-[8px]">
                  <a href="#" onClick={handleImageAdd}>
                    画像を追加する
                  </a>
                </div>
              </div>
            </div>
            <div className="h-[147px]">
              <div className="h-[19px] mt-[32px] px-[16px] font-bold text-[16px]">
                リンク
              </div>
              <div className="h-[125px]">
                <div className="h-[49px] border-y-2">
                  <div className="py-[16px] pl-[16px]">
                    https://www.youtube.com/xxx
                  </div>
                </div>
                <div className="h-[49px] border-b-2">
                  <div className="py-[16px] pl-[16px]">
                    https://www.sirogohan.com/xxx
                  </div>
                </div>
              </div>
              <div className="h-[27px] flex text-red-400">
                <div className="ml-4 mr-1 mt-[9px] h-4 w-4">+</div>
                <div className="h-[19px] w-[128px] text-[16px] mt-[8px]">
                  <Link href="../draft/addLink">リンクを追加する</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Draft
