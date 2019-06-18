// vendors
import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const components = {
  link: Link,
  a: ({ children, ...rest }) => <a {...rest}>{children}</a>,
  href: ({ children, ...rest }) => <a {...rest}>{children}</a>,
  button: ({ children, ...rest }) => <button {...rest}>{children}</button>,
}

const Button = ({ children, tag, to, ...rest }) => {
  const Tag = components[tag || "button"]

  const props = {
    to: tag === "link" ? to : undefined,
    href: tag === `href` || tag === `a` ? to : undefined,
    ...rest,
  }

  const buttonStyles = css``

  const style = {
    "&&": {
      ...buttonStyles,
    },
  }

  return (
    <Tag {...props} css={style}>
      {children}
    </Tag>
  )
}

export default Button
