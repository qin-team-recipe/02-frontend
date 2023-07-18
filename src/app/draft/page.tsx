"use client"

import { AddImages } from "./components/AddImages"
import { AddLinks } from "./components/AddLinks"
import { AddMaterial } from "./components/AddMaterial"
import { AddProcess } from "./components/AddProcess"
import { FooterButtons } from "./components/FooterButton"
import { HeaderButtons } from "./components/HeaderButtons"

const Draft = () => {
  return (
    <>
      <div className="w-[480px] border-x-2 pb-16">
        <HeaderButtons />
        <AddMaterial />
        <AddProcess />
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
    </>
  )
}

export default Draft
