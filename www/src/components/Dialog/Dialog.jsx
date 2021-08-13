// vendors
/** @jsx jsx */
import { jsx } from "@emotion/react"
import React from "react"
import { DialogOverlay, DialogContent } from "@reach/dialog"
import "@reach/dialog/styles.css"
import VisuallyHidden from "@reach/visually-hidden"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { zIndices } from "../../styles/variables"
import themes from "../../styles/themes"

const Dialog = ({ onClose, isOpen, children, themeColor }) => {
  const theme = themeColor === "ORANGE" ? themes["DARK"] : themes["ORANGE"]

  const Overlay = styled(DialogOverlay)`
    z-index: ${zIndices.modalBackdrop};
  `

  const Content = styled(DialogContent)`
    width: 76vw;
    max-width: 1452px;
    color: ${theme.color};
    background-color: ${theme.backgroundColor};
  `

  return (
    <Overlay isOpen={isOpen} onDismiss={() => onClose()}>
      <Content>
        <div
          css={css`
            text-align: right;
          `}
        >
          <button
            onClick={() => {
              onClose(false)
            }}
            css={css`
              appearance: none;
              background: none;
              border: none;
            `}
          >
            <VisuallyHidden>Fermer</VisuallyHidden>
            <span area-hidden>x</span>
          </button>
        </div>

        <div>{children}</div>
      </Content>
    </Overlay>
  )
}

export default Dialog
