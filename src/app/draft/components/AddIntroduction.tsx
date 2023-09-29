import { useFormContext } from "react-hook-form"

import { DraftSchema } from "../draftSchema"

const AddIntroduction = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<DraftSchema>()

  return (
    <>
      <div className="mt-5">
        <div className="ml-4 h-[19px] text-[16px] font-bold">
          レシピの紹介文(任意)
        </div>
        <div className="mt-1 min-h-[72px] border-y-2">
          <textarea
            {...register("description")}
            className="min-h-[72px] w-full px-2 py-1"
            form="text"
          />
          {errors.description ? (
            <div className="text-red-500">{errors.description.message}</div>
          ) : null}
        </div>
      </div>
    </>
  )
}
export default AddIntroduction
