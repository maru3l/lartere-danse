// vendors
import React from "react"
import css from "@emotion/css"
import { transition, colors } from "../../styles/variables"

const TeamMemberCard = ({ name, role, email = [], portrait }) => {
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
          {portrait && portrait.asset.fluid.srcSetWebp && (
            <source
              sizes="
                (min-width: 653px) 46vw,
                (min-width: 994px) 30vw,
                (min-width: 1348px) 23vw,
                (min-width: 1920px) 478px,
                94vw
              "
              srcset={portrait.asset.fluid.srcSetWebp}
              type="image/webp"
            />
          )}

          {portrait && portrait.asset.fluid.srcSet && (
            <source
              sizes="
                (min-width: 653px) 46vw,
                (min-width: 994px) 30vw,
                (min-width: 1348px) 23vw,
                (min-width: 1920px) 478px,
                94vw
              "
              srcset={portrait.asset.fluid.srcSet}
            />
          )}

          {portrait && portrait.asset.fluid.src && (
            <img src={portrait.asset.fluid.src} alt={portrait.asset.alt} />
          )}
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
            {email.map(address => (
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
