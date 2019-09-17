// vendors
import React from "react"
import css from "@emotion/css"

// components
import TeamMemberCard from "./TeamMemberCard"
import mediaQuery from "../../utils/media-query"

const TeamGrid = ({ members, ...props }) => {
  return (
    <ul
      css={css`
        display: grid;
        grid-gap: ${(30 / 1920) * 100}vw;
        list-style: none;
        margin: 0;
        padding: 0;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

        ${mediaQuery.greaterThen(1650)} {
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
        }
        ${mediaQuery.greaterThen(1920)} {
          grid-gap: 30px;
        }
      `}
      {...props}
    >
      {members.map(member => (
        <li>
          <TeamMemberCard {...member} />
        </li>
      ))}
    </ul>
  )
}

export default TeamGrid
