"use client"

import React, { useEffect, useState } from "react"

export type LinkInputType = {
  url: string
  error: boolean
}

interface UserProfileLinkListProps {
  onLinkChange: (links: LinkInputType[]) => void
}

const UserProfileLinkList: React.FC<UserProfileLinkListProps> = ({
  onLinkChange,
}) => {
  const URL_DEFAULT = "https://"
  const [linkInputs, setLinkInputs] = useState<LinkInputType[]>([
    { url: URL_DEFAULT, error: true },
  ])
  const [addLinkDisable, setAddLinkDisable] = useState(false)
  const MAX_LINK_COUNT = 10
  const URL_PATTERN = /^(https?):\/\/[^\s/$.?#].[^\s]*$/i

  useEffect(() => {
    if (MAX_LINK_COUNT <= linkInputs.length) {
      setAddLinkDisable(true)
    } else {
      const hasEmpty = linkInputs.some((l) => l.url === "")
      if (hasEmpty) {
        setAddLinkDisable(true)
      } else {
        setAddLinkDisable(false)
      }
    }
  }, [linkInputs])

  const handleOnChangeLinks = (i: number, url: string) => {
    const newLinkInputs = [...linkInputs]
    if (url === "" && 1 < linkInputs.length) {
      newLinkInputs.splice(i, 1)
    } else {
      newLinkInputs[i].url = url
      newLinkInputs[i].error = !URL_PATTERN.test(url)
    }
    setLinkInputs(newLinkInputs)
    onLinkChange(newLinkInputs)
  }
  const handleAddlink = () => {
    const newLinkInputs = [...linkInputs, { url: URL_DEFAULT, error: true }]
    setLinkInputs(newLinkInputs)
    onLinkChange(newLinkInputs)
  }

  return (
    <>
      {linkInputs.map((linkInput, i) => (
        <div key={i}>
          <input
            type="text"
            maxLength={1024}
            className={
              linkInput.error
                ? "w-full rounded-none border-b border-l-0 border-r-0 border-t border-gray-300 bg-red-100 p-3 text-red-500 focus:outline-none"
                : "w-full rounded-none border-b border-l-0 border-r-0 border-t border-gray-300 bg-white p-3 text-black focus:outline-none"
            }
            placeholder="リンクURLを入力してください"
            value={linkInput.url}
            onChange={(e) => handleOnChangeLinks(i, e.target.value)}
          />
        </div>
      ))}
      <button
        onClick={handleAddlink}
        className={
          "ml-2 text-sm " + (addLinkDisable ? "text-gray-300" : "text-red-600")
        }
        disabled={addLinkDisable}
      >
        ＋リンクを追加する
      </button>
    </>
  )
}

export default UserProfileLinkList
