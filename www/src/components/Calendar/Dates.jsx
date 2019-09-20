// vendors
import React, { useState } from "react"
import css from "@emotion/css"
import { colors } from "../../styles/variables"
import { keyframes } from "@emotion/core"
import useMobile from "../../hooks/useMobile"

const getColorForAudience = audience => {
  switch (audience) {
    case "professionnel":
      return colors.PortlandOrange
    case "sceneArtist":
      return colors.canary
    case "artist":
      return colors.PaleCerulean
    case "generalPublic":
      return colors.grey
    default:
      return "#fff"
  }
}

const Event = ({ event }) => {
  const delta = 100 / (event.targetAudience.length + 1)

  const animateLink = keyframes`
    ${event.targetAudience.map(
      (audience, index) => css`
        ${delta * index}% {
          color: ${getColorForAudience(audience)};
        }

        ${index === 0 &&
          css`
            100% {
              color: ${getColorForAudience(audience)};
            }
          `}
      `
    )}
  `

  return (
    <li
      css={css`
        margin-top: 0.5em;
      `}
    >
      <a
        css={css`
          text-decoration: none;
          animation: ${animateLink} ${delta * 0.25}s infinite;

          :hover {
            animation: none;
            color: ${colors.pink};
          }
        `}
        href={`/activites#${event.slug}`}
      >
        {event.title}
      </a>
    </li>
  )
}

const Dates = ({ month, year, events = [] }) => {
  const isMobile = useMobile()

  const daysInMonth = new Date(year, month + 1, 0, 0, 0, 0).getUTCDate()
  const firstDayInMonthPosition = new Date(year, month, 1, 0, 0, 0).getUTCDay()

  return (
    <>
      {Array(daysInMonth)
        .fill()
        .map((val, index) => {
          const todayEvents = events.filter(event => {
            const today = new Date(year, month, index + 1, 0, 0, 0)

            return (
              today.getDate() === event.date.getDate() &&
              today.getMonth() === event.date.getMonth() &&
              today.getFullYear() === event.date.getFullYear()
            )
          })

          if (todayEvents.length < 1 && isMobile) return <></>

          return (
            <div
              css={css`
                padding-bottom: 100%;
                position: relative;

                ${index === 0 &&
                  css`
                    grid-column: ${!isMobile
                      ? firstDayInMonthPosition + 1
                      : "1"};
                  `}
              `}
            >
              <div
                css={css`
                  position: absolute;
                  top: 0;
                  right: 0;
                  bottom: 0;
                  left: 0;
                  overflow: hidden;
                  overflow-y: scroll;
                  z-index: 1;
                  height: 100%;
                `}
              >
                <ul
                  css={css`
                    min-height: 100%;
                    display: flex;
                    flex-flow: column;
                    justify-content: center;
                    font-size: ${27 / 33}em;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    margin-right: 1em;
                  `}
                >
                  {todayEvents.map(event => (
                    <Event event={event} />
                  ))}
                </ul>
              </div>

              <time
                css={css`
                  position: absolute;
                  display: flex;
                  justify-content: center;
                  width: 2ch;
                  color: #000;
                  margin-left: 0.25em;
                  font-size: ${94 / 32}em;

                  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
                  font-family: "Adieu";
                `}
                dateTime={`${year}-${month + 1}-${index + 1}`}
              >
                {index + 1}
              </time>
            </div>
          )
        })}
    </>
  )
}

export default Dates
