// vendors
import React, { useState } from "react"
import css from "@emotion/css"
import { colors, transition } from "../../styles/variables"

const Collapse = ({ children }) => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen(!open)

  return (
    <>
      <div role="region" hidden={!open}>
        {open && children}
      </div>

      <button
        type="button"
        onClick={toggleOpen}
        aria-expanded={open}
        css={css`
          appearance: none;
          border: none;
          background: none;
          cursor: pointer;
          text-decoration: underline;
          color: inherit;
          transition: color ${transition.speed.fast} ${transition.curve.default};

          :hover {
            color: ${colors.pink};
          }
        `}
      >
        {!open && <span>En savoir plus</span>}

        {open && (
          <span>
            <abbr title="fermer">X</abbr>
          </span>
        )}
      </button>
    </>
  )
}

export default Collapse
