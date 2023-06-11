import React from "react"

export const metadata = {
  title: "Top Recipe",
  description: "Manage your favorite recipes.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* TODO 全体レイアウト決定前のため暫定的にここでレスポンシブ対応胃 */}
      <div className="flex mx-auto min-h-screen sm:max-w-2xl sm:flex-row sm:gap-x-3 sm:px-4 sm:pl-6">
        {children}
      </div>
    </>
  )
}
