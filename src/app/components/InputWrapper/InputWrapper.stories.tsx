import { Meta, StoryObj } from "@storybook/react"

import { Input } from "@/app/components/Input"
import { MainContentLayoutDecorator } from "@/stories/decorators/MainContentLayoutDecorator"

import { InputWrapper } from "./InputWrapper"

const meta: Meta<typeof InputWrapper> = {
  title: "Component/InputWrapper",
  component: InputWrapper,
  tags: ["autodocs"],
  decorators: [MainContentLayoutDecorator],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta

type Story = StoryObj<typeof InputWrapper>

export const Default: Story = {
  args: {
    label: "Label",
    children: <Input placeholder="Placeholder" />,
    error: "error message",
  },
}
