// vendors
/** @jsx jsx */
import { jsx } from "@emotion/react"
import React from "react"
import { css } from "@emotion/react"
import { transition, colors } from "../../styles/variables"
import { getSrc, getSrcSet } from "gatsby-plugin-image"

const TeamMemberCard = ({ name, role, email = [], portrait }) => {
  const src = getSrc(portrait.asset)
  const srcSet = getSrcSet(portrait.asset)

  return (
    <div
      css={css`
        display: flex;
        flex-flow: column;
        width: 100%;
      `}
    >
      <div
        css={css`
          position: relative;

          :before {
            display: block;
            margin-bottom: ${(86 / 139) * 100}%;
            content: "";
          }

          picture {
            display: block;
            content: "";
            width: 100%;
            height: 100%;
            overflow: hidden;
            line-height: 0;

            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;

            * {
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              object-fit: cover;
              width: 100%;
              height: 100%;
              filter: grayscale();
              mix-blend-mode: multiply;
              ${portrait &&
              portrait.hotspot &&
              css`
                object-position: ${portrait.hotspot.x * 100}%
                  ${portrait.hotspot.y * 100}%;
              `}
            }
          }
        `}
      >
        <picture>
          <img
            sizes="(min-width: 653px) 46vw, (min-width: 994px) 30vw, (min-width: 1348px) 23vw, (min-width: 1920px) 478px, 94vw"
            srcset={srcSet}
            src={src}
            alt={(portrait.asset || { alt: null }).alt || ""}
          />
        </picture>
      </div>

      <div
        css={css`
          font-size: ${27 / 33}em;
          p,
          ul {
            margin: 0.75em auto;
          }
        `}
      >
        <p>{name}</p>

        <p>{role}</p>

        {email.length > 0 && (
          <ul
            css={css`
              list-style: none;
              margin: 0;
              padding: 0;
            `}
          >
            {email.map((address) => (
              <li>
                <a
                  href={`mailto:${address}`}
                  css={css`
                    color: inherit;
                    text-decoration: none;

                    transition: color ${transition.speed.fast}
                      ${transition.curve.default};

                    :hover {
                      color: ${colors.pink};
                    }
                  `}
                >
                  {address.substr(0, address.indexOf("@") + 1)}
                  <br />
                  {address.substr(address.indexOf("@") + 1)}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default TeamMemberCard
