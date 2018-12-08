// @flow

import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Survey from "./"

storiesOf("Survey", module).add("Basic", () => <Survey />)
