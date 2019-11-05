// vendors
import React from "react"
import { storiesOf } from "@storybook/react"
import { boolean, withKnobs } from "@storybook/addon-knobs"

import Button from "./index"

const stories = storiesOf("Button", module)

stories.add("Primary", () => (
  <Button disabled={boolean("Disabled", false)}>Boutton</Button>
))
