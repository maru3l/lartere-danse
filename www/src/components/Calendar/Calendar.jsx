// vendors
import React, { useState } from "react"
import Dates from "./Dates"
import css from "@emotion/css"
import styled from "@emotion/styled"
import { colors } from "../../styles/variables"
import mediaQuery from "../../utils/media-query"

const SwitcherButton = styled.button`
  appearance: none;
  border: none;
  background: none;
  color: inherit;
`

const now = new Date()

const dayOfTheWeek = [
  "dimanche",
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
]

const DayOfTheWeek = styled.div`
  grid-row: 2 / span 1;
  grid-column: ${props => props.position} / span 1;
  text-align: left;
  color: ${colors.grey};

  ${mediaQuery.lessThen(1024)} {
    display: none;
  }
`

const Calendar = ({
  month = now.getMonth() + 1,
  year = now.getFullYear(),
  switcher = false,
  events = [],
}) => {
  const [currentMonth, setCurrentMonth] = useState(month)
  const [currentYear, setCurrentYear] = useState(year)

  const increaseMonth = () => {
    if (currentMonth > 11) {
      setCurrentMonth(1)

      setCurrentYear(currentYear + 1)

      return
    }

    setCurrentMonth(currentMonth + 1)
  }
  const decreaseMonth = () => {
    if (currentMonth < 2) {
      setCurrentMonth(12)

      setCurrentYear(currentYear - 1)

      return
    }

    setCurrentMonth(currentMonth - 1)
  }

  const date = new Date(currentYear, currentMonth - 1, 1, 0, 0, 0)
  return (
    <div
      css={css`
        display: grid;

        ${mediaQuery.lessThen(1024)} {
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: auto 1fr;
        }

        ${mediaQuery.greaterThen(1024)} {
          grid-template-columns: repeat(7, 1fr);
          grid-auto-rows: 0.5fr 0.5fr 1fr;
        }
      `}
    >
      <div
        css={css`
          display: grid;
          grid-row: 1 / span 1;
          grid-column: 1 / span 3;
          text-align: center;
          color: ${colors.grey};
          grid-template-columns: repeat(3, 1fr);

          ${mediaQuery.greaterThen(1024)} {
            grid-column: 1 / span 7;
            grid-template-columns: repeat(7, 1fr);
            text-align: left;
          }
        `}
      >
        <div
          css={css`
            grid-column: 1 / span 3;
            ${mediaQuery.greaterThen(1024)} {
              grid-column: 2 / span 1;
            }
          `}
        >
          {switcher && (
            <SwitcherButton onClick={decreaseMonth}>{"<"}</SwitcherButton>
          )}
          {date.toLocaleDateString("fr", { month: "long" })}
          {switcher && (
            <SwitcherButton onClick={increaseMonth}>{">"}</SwitcherButton>
          )}
        </div>
      </div>

      {dayOfTheWeek.map((day, index) => (
        <DayOfTheWeek position={index + 1}>{day}</DayOfTheWeek>
      ))}

      <Dates month={currentMonth - 1} year={currentYear} events={events} />
    </div>
  )
}

export default Calendar
