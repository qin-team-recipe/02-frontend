import { Meta, StoryObj } from "@storybook/react"

import Sidebar from "./Sidebar"

const meta: Meta<typeof Sidebar> = {
  title: "Example/Sidebar",
  component: Sidebar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const SidebarDefault: Story = {}
