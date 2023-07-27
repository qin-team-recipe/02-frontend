"use client"

import { NextPage } from "next"
import { useRouter } from "next/navigation"
import React, { useContext } from "react"

import {
  getPathGoAfterLoginFromLocalStorage,
  setLoginUserToLocalStorage,
  setTokenToLocalStorage,
} from "@/app/utils/localStorage"

import {
  GoogleUserContext,
  UserContext,
} from "../components/AuthedCheckProvider"
import Container from "../components/Container"
import FooterMenu from "../components/FooterMenu"
import { SubHeader } from "../components/SubHeader"
import { fetchData } from "../utils/fetchMethod"

const Register: NextPage = () => {
  const { googleUser, setGoogleUser } = useContext(GoogleUserContext)
  const { user, setUser } = useContext(UserContext)
  const router = useRouter()

  const handleClick = async () => {
    try {
      const result = await fetchData({
        url: "/register",
        method: "POST",
        body: googleUser,
      })

      if (result.message === "success") {
        console.log("register success")
        setTokenToLocalStorage(result.data.token)
        setLoginUserToLocalStorage(result.data.user)
        setUser(result.data.user)

        const goAfterLogin = getPathGoAfterLoginFromLocalStorage()
        router.push(goAfterLogin ?? "/")
      } else {
        console.error("register error")
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Container>
        <div className="flex items-center justify-center">
          <SubHeader title="新規登録" />
        </div>
        <div className="-mx-[15px] mt-5">
          <h3 className="ml-4 font-bold">ニックネーム</h3>
          <input
            className="mx-auto ml-[1px] mt-1 h-11 w-full max-w-[476px] border-b border-t border-custom-thin-gray bg-white px-[16px] py-[12px] placeholder-custom-thin-gray"
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
        <div className="-mx-[16px] w-[476px] overflow-auto border-l-2 border-r-2">
          <FooterMenu />
        </div>
      </Container>
    </>
  )
}

export default Register
