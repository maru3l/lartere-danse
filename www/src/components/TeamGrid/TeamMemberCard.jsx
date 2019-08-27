// vendors
import React from "react"
import css from "@emotion/css"

const TeamMemberCard = ({ name, role, emails = [] }) => {
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
            }
          }
        `}
      >
        <picture>
          <img src="https://picsum.photos/1275/789" alt="" />
        </picture>
      </div>

      <div>
        <p>Nom</p>

        <p>Titre</p>

        <ul>
          <li>courriel</li>
        </ul>
      </div>
    </div>
  )
}

export default TeamMemberCard
