import "./styles/globals.css"
import "./styles/pages.scss"

import { Inter } from "next/font/google"

import RecoilState from "@/app/components/RecoilState"

import { AuthedCheckProvider } from "./components/AuthedCheckProvider"
import Sidebar from "./components/Sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <AuthedCheckProvider>
            {/* 全コンポーネントにRecoilを適用させる */}
            <RecoilState>
              <div className="flex w-full justify-center">
                <Sidebar />
                <div className=" w-full max-w-[480px] border-l-2 border-r-2">
                  {children}
                </div>
              </div>
            </RecoilState>
          </AuthedCheckProvider>
        </body>
      </html>
    </>
  )
}
