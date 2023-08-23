import { Meta, StoryObj } from "@storybook/react"

import { MainContentLayoutContainerDecorator } from "@/stories/decorators/MainContentLayoutContainerDecorator"

import { ActionButton } from "./ActionButton"

const meta: Meta<typeof ActionButton> = {
  title: "Component/ActionButton",
  component: ActionButton,
  tags: ["autodocs"],
  decorators: [MainContentLayoutContainerDecorator],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    color: {
      options: ["tomato", "gray"],
      control: { type: "radio" },
    },
  },
}

export default meta

type Story = StoryObj<typeof ActionButton>

export const Default: Story = {
  args: {
    children: "Button",
  },
}
