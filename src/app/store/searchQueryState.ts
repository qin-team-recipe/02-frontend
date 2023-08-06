import { atom } from "recoil"

export const searchQueryState = atom<string | undefined>({
  key: "searchQueryState",
  default: undefined,
})
