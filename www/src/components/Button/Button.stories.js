// vendors
import React from "react"
import { storiesOf } from "@storybook/react"
import { boolean } from "@storybook/addon-knobs"

import Button from "./index"

const stories = storiesOf("Button", module)

stories.addDecorator(withKnobs)

stories.add("Primary", () => (
  <Button
    disabled={boolean("Disabled", false)}
  >
    Boutton
  </Button>
))
