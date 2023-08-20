import { Args, PartialStoryFn } from "@storybook/csf"
import { ReactRenderer } from "@storybook/react"

import { Container } from "@/app/components/Container2"
import { MainContentLayout } from "@/app/components/MainContentLayout"

export const MainContentLayoutContainerDecorator = (
  Story: PartialStoryFn<ReactRenderer, Args>
) => (
  <MainContentLayout>
    <Container>
      <Story />
    </Container>
  </MainContentLayout>
)
