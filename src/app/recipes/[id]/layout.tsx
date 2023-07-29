"use client"
import { RecoilRoot } from "recoil"

import PageBackButton from "../commonComponents/organisms/PageBackButton"

export const metadata = {
  title: "Top Recipe",
  description: "Manage your favorite recipes.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 一旦recipeだけで使用 */}
      <RecoilRoot>
        <div className="relative">
          <div className="absolute left-4 top-4 z-10 text-white">
            <PageBackButton />
          </div>
          {children}
        </div>
      </RecoilRoot>
    </>
  )
}
