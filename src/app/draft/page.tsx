"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"

import usePost from "../hooks/usePost"
import { AddImages } from "./components/AddImages"
import AddIntroduction from "./components/AddIntroduction"
import { AddLinks } from "./components/AddLinks"
import { AddMaterial } from "./components/AddMaterial"
import { AddProcess } from "./components/AddProcess"
import { FooterButtons } from "./components/FooterButton"
import { HeaderButtons } from "./components/HeaderButtons"
import { DraftSchema, draftSchema } from "./draftSchema"

const Draft = () => {
  const form = useForm<DraftSchema>({
    defaultValues: {
      title: "",
      description: "",
      servings: 1,
      is_draft: true,
    },
    resolver: zodResolver(draftSchema),
  })
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = form

  const {
    doPost: postUserRecipes,
    isLoading,
    error,
    isAuthError,
  } = usePost("POST", "/userRecipes", JSON.stringify(getValues()))

  const handlePostUserRecipes = async (values: DraftSchema) => {
    console.log({ values })
    try {
      const res = await postUserRecipes()
      console.log({ res })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(handlePostUserRecipes)}>
        <div className="w-[480px] border-x-2 pb-16">
          <HeaderButtons />
          <AddMaterial />
          <AddProcess />
          <AddImages />
          <AddIntroduction />
          <AddLinks />
          <FooterButtons />
        </div>
      </form>
    </FormProvider>
  )
}

export default Draft
