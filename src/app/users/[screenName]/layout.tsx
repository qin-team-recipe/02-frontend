import React from "react"

import PageBackButton from "@/app/recipes/commonComponents/organisms/PageBackButton"

export const metadata = {
  title: "Top Chef",
  description: "Manage your favorite chefs.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative">
        <div className="absolute left-4 top-4 z-10 text-black">
          <PageBackButton />
        </div>
        {children}
      </div>
    </>
  )
}
