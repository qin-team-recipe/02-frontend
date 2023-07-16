"use client"

import Sidebar from "../components/Sidebar"
import { AddImages } from "./components/AddImages"
import { AddLinks } from "./components/AddLinks"
import { AddMaterial } from "./components/AddMaterial"
import { FooterButtons } from "./components/FooterButton"
import { HeaderButtons } from "./components/HeaderButtons"

const Draft = () => {
  return (
    <>
      <div className="flex justify-center">
        <Sidebar />
        <div className="w-[480px] border-x-2 pb-16">
          <HeaderButtons />
          <AddMaterial />
          <div className="pt-8">
            <div className="mb-[4px] h-[19px] pl-4">
              <div className="w-[48px] text-[16px] font-bold">作り方</div>
            </div>
            <div className="flex max-h-[108px] border-y-2 px-4 py-2">
              <div className="flex h-[20px] w-[20px] items-center justify-center gap-x-2 rounded-full bg-red-600">
                <span className="text-white">1</span>
              </div>
              <div>
                <div className="ml-2 w-[332px] text-[14px]">
                  複数行ある場合のダミーテキスト。複数行ある場合のダミーテキスト。複数行ある場合のダミーテキスト。複数行ある場合のダミーテキスト。複数行ある場合のダミーテキスト。
                </div>
              </div>
            </div>
            <div className="flex max-h-[108px] border-b-2 px-4 py-2">
              <div className="flex h-[20px] w-[20px] items-center justify-center gap-x-2 rounded-full bg-red-600">
                <span className="text-white">2</span>
              </div>
              <div>
                <div className="ml-2 w-[332px] text-[14px]">
                  1行しか無い場合のダミーテキスト。
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[27px] text-red-400">
            <div className="ml-4 mr-1 mt-[9px] h-4 w-4">+</div>
            <div className="mt-[8px] h-[19px] w-[112px] text-[16px]">
              工程を追加する
            </div>
          </div>
          <AddImages />
          <div className="mt-5">
            <div className="ml-4 h-[19px] text-[16px] font-bold">
              レシピの紹介文(任意)
            </div>
            <div className="mt-1 min-h-[72px] border-y-2">
              <input className="min-h-[72px] w-full" form="text"></input>
            </div>
          </div>
          <AddLinks />
          <FooterButtons />
        </div>
      </div>
    </>
  )
}

export default Draft
