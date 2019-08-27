// vendors
import React from "react"
import css from "@emotion/css"

// components
import TeamMemberCard from "./TeamMemberCard"
import mediaQuery from "../../utils/media-query"

const TeamGrid = ({ members = [1, 2, 3, 4, 5, 6], ...props }) => {
  return (
    <ul
      css={css`
        display: grid;
        grid-gap: ${(30 / 1920) * 100}vw;
        grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
        list-style: none;
        margin: 0;
        padding: 0;

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
