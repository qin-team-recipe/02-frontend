import { ReactNode } from "react"

import { cn } from "@/app/utils/cn"

export type ContainerProps = {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  return <div className={cn("px-4", className)}>{children}</div>
}
