"use client"

import Sidebar from "../components/Sidebar"
import { AddImages } from "./components/AddImages"
import { AddLinks } from "./components/AddLinks"
import { AddMaterial } from "./components/AddMaterial"
import { HeaderButtons } from "./components/HeaderButtons"

const Draft = () => {
  return (
    <>
      <div className="flex justify-center">
        <Sidebar />
        <div className="w-[390px] border-x-2 pb-16">
          <HeaderButtons />
          <AddMaterial />
          <div className="pt-8">
            <div className="pl-4 mb-[4px] h-[19px]">
              <div className="w-[48px] font-bold text-[16px]">作り方</div>
            </div>
            <div className="max-h-[108px] flex border-y-2 py-2 px-4">
              <div className="gap-x-2 w-[20px] h-[20px] rounded-full bg-red-600 flex items-center justify-center">
                <span className="text-white">1</span>
              </div>
              <div>
                <div className="ml-2 w-[332px] text-[14px]">
                  複数行ある場合のダミーテキスト。複数行ある場合のダミーテキスト。複数行ある場合のダミーテキスト。複数行ある場合のダミーテキスト。複数行ある場合のダミーテキスト。
                </div>
              </div>
            </div>
            <div className="max-h-[108px] flex border-b-2 py-2 px-4">
              <div className="gap-x-2 w-[20px] h-[20px] rounded-full bg-red-600 flex items-center justify-center">
                <span className="text-white">2</span>
              </div>
              <div>
                <div className="ml-2 w-[332px] text-[14px]">
                  1行しか無い場合のダミーテキスト。
                </div>
              </div>
            </div>
          </div>
          <div className="h-[27px] flex text-red-400">
            <div className="ml-4 mr-1 mt-[9px] h-4 w-4">+</div>
            <div className="h-[19px] w-[112px] text-[16px] mt-[8px]">
              工程を追加する
            </div>
          </div>
          <AddImages />
          <AddLinks />
        </div>
      </div>
    </>
  )
}

export default Draft
