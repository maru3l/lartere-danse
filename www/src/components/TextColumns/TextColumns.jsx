// vendors
import React from "react"
import css from "@emotion/css"
import mediaQuery from "../../utils/media-query"

const TextColumns = ({ columns = 2, children, ...props }) => {
  return (
    <div
      css={css`
        columns: 1;
        margin-top: ${100 / 55}em;
        margin-bottom: ${200 / 55}em;

        p:first-child {
          margin-top: 0px;
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
