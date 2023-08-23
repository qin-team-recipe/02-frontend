import { Meta, StoryObj } from "@storybook/react"

import { MainContentLayoutDecorator } from "@/stories/decorators/MainContentLayoutDecorator"

import { Input } from "./Input"

const meta: Meta<typeof Input> = {
  title: "Component/Input",
  component: Input,
  tags: ["autodocs"],
  decorators: [MainContentLayoutDecorator],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: "Placeholder",
  },
}

export const Error: Story = {
  args: {
    placeholder: "Placeholder",
    error: true,
  },
}
