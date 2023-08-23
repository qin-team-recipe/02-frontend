import { zodResolver } from "@hookform/resolvers/zod"
import { Meta } from "@storybook/react"
import { FC } from "react"
import type { SubmitHandler } from "react-hook-form"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { ActionButton } from "@/app/components/ActionButton"
import { Container } from "@/app/components/Container2"
import { Input } from "@/app/components/Input"
import { InputWrapper } from "@/app/components/InputWrapper"
import { MainContentLayoutDecorator } from "@/stories/decorators/MainContentLayoutDecorator"

const meta: Meta<typeof InputWrapper> = {
  title: "Example/CreateUserForm",
  component: () => null,
  tags: ["autodocs"],
  decorators: [MainContentLayoutDecorator],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta

const schema = z.object({
  name: z.string().min(3).max(20),
})

type Schema = z.infer<typeof schema>

export const Default = () => {
  const handleSubmit = (values: Schema) => {
    console.log({ values })
  }

  return (
    <div>
      <h2 className="mb-5 flex h-12 items-center justify-center border-b text-lg font-bold">
        新規登録
      </h2>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}

type FormProps = {
  onSubmit: SubmitHandler<Schema>
}

const Form: FC<FormProps> = ({ onSubmit }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Schema>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(schema),
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper label="ニックネーム" error={errors.name?.message}>
        <Input
          {...register("name")}
          placeholder="ニックネームをご入力ください"
        />
      </InputWrapper>
      <Container className="mt-8 flex gap-4">
        <ActionButton type="submit" theme="filled" size="lg">
          登録する
        </ActionButton>
        <ActionButton theme="outline" size="lg">
          ログアウト
        </ActionButton>
      </Container>
    </form>
  )
}
