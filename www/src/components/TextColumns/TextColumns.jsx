// vendors
import React from "react"
import css from "@emotion/css"
import mediaQuery from "../../utils/media-query"

const TextColumns = ({ columns = 2, children, ...props }) => {
  return (
    <div
      css={css`
        columns: 1;
        column-gap: 1.5em;

        *:first-child {
          margin-top: 0px;
        }

        h2 + &,
        h3 + &,
        p + & {
          margin-top: 0;
        }

        ${mediaQuery.greaterThen(768)} {
          columns: ${columns};
        }
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default TextColumns
