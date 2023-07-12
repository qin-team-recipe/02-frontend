"use client"

import { FC, ReactNode } from "react"
import { RecoilRoot } from "recoil"

type PropsType = {
  children: ReactNode
}

const RecoilState: FC<PropsType> = (props) => {
  const { children } = props

  return <>{<RecoilRoot>{children}</RecoilRoot>}</>
}

export default RecoilState
