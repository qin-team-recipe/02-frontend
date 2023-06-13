import React from "react"

type SidebarProps = {
  children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div className="hidden md:block p-4 w-full max-w-[240px]">{children}</div>
  )
}

export default Sidebar
