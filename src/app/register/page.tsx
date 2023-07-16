"use client"

import { NextPage } from "next"
import React, { useEffect, useState } from "react"

import Container from "../components/Container"
import FooterMenu from "../components/FooterMenu"
import Sidebar from "../components/Sidebar"
import { SubHeader } from "../components/SubHeader"

const Register: NextPage = () => {
  const [nickname, setNickname] = useState<string>("")

  useEffect(() => {}, [])

  const handleClick = async () => {
    // POST requestの例
    const response = await fetch("http://localhost:8080/api/nickname", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nickname }),
    })

    // 応答の処理
    if (response.ok) {
      const result = await response.json()
      console.log(result)
    } else {
      console.log("Error: ", response.status)
    }
  }

  return (
    <>
      <div className="flex w-full justify-center">
        <Sidebar />
        <div className=" w-full max-w-[480px]">
          <Container>
            <div className="flex items-center justify-center">
              <SubHeader title="新規登録" />
            </div>
            <div className="-mx-[15px] mt-5">
              <h3 className="ml-4 font-bold">ニックネーム</h3>
              <input
                className="mx-auto mt-1 h-11 w-full border-b border-t border-custom-thin-gray bg-white px-[16px] py-[12px] placeholder-custom-thin-gray"
                type="text"
                placeholder="ニックネームをご入力ください"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
            <div className="mt-5 flex items-center justify-center gap-6">
              <button
                className=" h-[35px] w-[171px] rounded-[4px] bg-tomato-light-9"
                onClick={handleClick}
              >
                <span className="ml-1 text-[14px] text-white">登録する</span>
              </button>
              <button className=" h-[35px] w-[171px] rounded-[4px] border border-tomato-light-7 bg-white ">
                <span className="ml-1 text-[14px] text-tomato-light-9">
                  ログアウト
                </span>
              </button>
            </div>
            <FooterMenu />
          </Container>
        </div>
      </div>
    </>
  )
}

export default Register
