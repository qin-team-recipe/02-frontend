"use client"

import { AddImages } from "./components/AddImages"
import AddIntroduction from "./components/AddIntroduction"
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
        <AddIntroduction />
        <AddLinks />
        <FooterButtons />
      </div>
    </>
  )
}

export default Draft
