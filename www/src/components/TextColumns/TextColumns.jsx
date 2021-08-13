// vendors
/** @jsx jsx */
import { jsx } from "@emotion/react"
import { css } from "@emotion/react"
import mediaQuery from "../../utils/media-query"

const TextColumns = ({ columns = 2, children, ...props }) => {
  return (
    <div
      css={css`
        columns: 1;
        column-gap: 1.5em;

        ${mediaQuery.greaterThen(768)} {
          columns: ${columns};

          *:first-child {
            margin-top: 0px;
          }

          h2 + &,
          h3 + &,
          p + & {
            margin-top: 0;
          }
        }
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default TextColumns
