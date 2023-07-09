import Link from "next/link"
import type { FC } from "react"

import { AddIcon } from "./AddIcon"

export const NewRecipeCard: FC = () => (
  <div className="mt-3 flex justify-center">
    {/* TODO: 遷移先を新規レシピ作成ページに変更する */}
    <Link
      href="/favorites"
      className="flex h-[170px] w-[170px] cursor-pointer flex-col items-center justify-center rounded-md border"
    >
      <p className="text-gray-500 ">新規追加</p>
      <AddIcon />
    </Link>
  </div>
)
