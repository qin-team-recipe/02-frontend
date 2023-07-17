"use client"

import { NextPage } from "next"
import { useRouter } from "next/navigation"
import React, { useContext } from "react"

import {
  GoogleUserContext,
  UserContext,
} from "../components/AuthedCheckProvider"
import Container from "../components/Container"
import FooterMenu from "../components/FooterMenu"
import Sidebar from "../components/Sidebar"
import { SubHeader } from "../components/SubHeader"

const Register: NextPage = () => {
  const { googleUser, setGoogleUser } = useContext(GoogleUserContext)
  const { user, setUser } = useContext(UserContext)
  const router = useRouter()

  console.log(googleUser)

  const handleClick = async () => {
    fetch("http://localhost:8083/api/v1/me/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(googleUser),
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Error: " + response.status)
        }
      })
      .then((result) => {
        setUser(result.data.user)
        router.push("/")
        console.log(result)
      })
      .catch((error) => {
        console.error(error)
      })
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
                value={googleUser?.display_name}
                onChange={(e) =>
                  setGoogleUser({ ...googleUser, display_name: e.target.value })
                }
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
