import React from "react"

import PageBackButton from "@/app/recipes/commonComponents/organisms/PageBackButton"

export const metadata = {
  title: "Top Chef",
  description: "Manage your favorite chefs.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* TODO 全体レイアウト決定前のため暫定的にここでレスポンシブ対応 */}
      <div className="mx-auto flex min-h-screen sm:max-w-2xl">
        <div className="absolute left-4 top-4 z-10 text-black">
          <PageBackButton />
        </div>
        {children}
      </div>
    </>
  )
}
