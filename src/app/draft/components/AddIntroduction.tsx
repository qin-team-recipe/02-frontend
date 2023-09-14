const AddIntroduction = () => {
  return (
    <>
      <div className="mt-5">
        <div className="ml-4 h-[19px] text-[16px] font-bold">
          レシピの紹介文(任意)
        </div>
        <div className="mt-1 min-h-[72px] border-y-2">
          <input className="min-h-[72px] w-full" form="text"></input>
        </div>
      </div>
    </>
  )
}
export default AddIntroduction
