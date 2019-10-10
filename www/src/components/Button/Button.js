// vendors
import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { transition, colors } from "../../styles/variables"

const components = {
  link: Link,
  a: ({ children, ...rest }) => <a {...rest}>{children}</a>,
  href: ({ children, ...rest }) => <a {...rest}>{children}</a>,
  button: ({ children, ...rest }) => <button {...rest}>{children}</button>,
}

const Button = ({ children, tag, to, secondary, ...rest }) => {
  const Tag = components[tag || "button"]

  const props = {
    to: tag === "link" ? to : undefined,
    href: tag === `href` || tag === `a` ? to : undefined,
    ...rest,
  }

  const secondaryStyle = css`
    color: initial;
    text-decoration: none;
    background-image: linear-gradient(
      120deg,
      ${colors.PaleCerulean} 0%,
      ${colors.PaleCerulean} 100%
    );
    background-size: 100% 80%;
    background-position: 0 center;
    background-repeat: no-repeat;

    transition: background-image ${transition.speed.fast}
      ${transition.curve.default};

    :hover {
      color: initial;
      background-image: linear-gradient(
        120deg,
        ${colors.pink} 0%,
        ${colors.pink} 100%
      );
    }
  `

  const style = {
    "&&": {
      ...(secondary ? secondaryStyle : {}),
    },
  }

  return (
    <Tag {...props} css={style}>
      {children}
    </Tag>
  )
}

export default Button
