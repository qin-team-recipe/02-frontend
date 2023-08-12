import React from "react"

export const metadata = {
  title: "Top Chef",
  description: "Manage your favorite chefs.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="min-h-screen bg-slate-100">{children}</div>
    </>
  )
}
