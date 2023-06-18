"use client"

import Link from "next/link"
import { useState } from "react"

import { AddImages } from "./components/AddImages"
import { Counter } from "./components/Counter"
import { HeaderButtons } from "./components/HeaderButtons"

const Draft = () => {
  const [inputForms, setInputForms] = useState<string[]>([""])

  const addInputForm = () => {
    setInputForms([...inputForms, ""])
  }

  const handleInputChange = (index: number, value: string) => {
    const newInputForms = [...inputForms]
    newInputForms[index] = value
    setInputForms(newInputForms)
  }

  return (
    <>
      <div className="h-auto w-[390px]">
        <HeaderButtons />
        <div className="h-[148px] pt-[32px]">
          <Counter />
          <div className="h-[42px] border-y-2">
            <input type="text" className="h-full w-full px-2" />
          </div>
          <div className="h-[42px] border-b-2">
            <input type="text" className="h-full w-full px-2" />
          </div>
          <div className="h-[42px] border-b-2">
            <input type="text" className="h-full w-full px-2" />
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
              <AddImages />
            </div>
            <div className="h-[147px]">
              <div className="h-[19px] mt-[32px] px-[16px] font-bold text-[16px]">
                リンク
              </div>
              <div className="h-[125px]">
                <div className="w-full border-y-2 h-[42px] flex justify-center items-center">
                  <input type="text" className="w-full" />
                </div>
                {inputForms.map((inputValue, index) => (
                  <div
                    key={index}
                    className="w-full border-b-2 h-[42px] flex justify-center items-center"
                  >
                    <input
                      value={inputValue}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      className="w-full"
                    />
                  </div>
                ))}
                <div className="h-[27px] flex text-red-400">
                  <div className="ml-4 mr-1 mt-[9px] h-4 w-4">+</div>
                  <div className="h-[19px] w-[128px] text-[16px] mt-[8px]">
                    <button onClick={addInputForm}>リンクを追加する</button>
                  </div>
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
