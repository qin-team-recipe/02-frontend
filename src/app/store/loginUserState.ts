import { atom } from "recoil"

type UserType = {
  display_name: string
  email: string
  service_name: string
  service_user_id: string
}

export const userState = atom<UserType>({
  key: "userState", // unique ID (with respect to other atoms/selectors)
  default: {
    display_name: "",
    email: "",
    service_name: "",
    service_user_id: "",
  }, // default value (aka initial value)
})
