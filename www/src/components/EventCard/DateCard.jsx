// vendors
import React from "react"
import { css } from "@emotion/core"
import dayToConditionalString from "../../../../utils/dayToConditionalString"

const getOldestDate = dates =>
  new Date(
    Math.min.apply(null, dates.map(({ from }) => new Date(`${from}T00:00:00`)))
  )

const getNewestDate = dates =>
  new Date(
    Math.min.apply(null, dates.map(({ to }) => new Date(`${to}T00:00:00`)))
  )

const DateCard = ({ date }) => {
  let fromDate = null
  let toDate = null
  let hours = []

  console.log(date)

  fromDate = new Date(`${date.from}T00:00:00`)
  toDate = new Date(`${date.to}T00:00:00`)

  // hours = date.reduce((acc, { fromTime, toTime }) => {
  //   const found = acc.find(
  //     ({ fromTime: from, toTime: to }) => fromTime === from && toTime === to
  //   )
  //   return found ? acc : [...acc, { fromTime, toTime }]
  // }, [])

  return (
    <li>
      {date.day && (
        <p
          css={css`
            margin-bottom: 0;
            + p {
              margin-top: 0;
            }
          `}
        >
          {dayToConditionalString(date.day)}
        </p>
      )}
      <p
        css={css`
          margin-bottom: 0;
        `}
      >
        {fromDate.getDate()}{" "}
        {fromDate.getMonth() !== toDate.getMonth() &&
          fromDate.toLocaleDateString("fr", { month: "long" })}{" "}
        {fromDate.getYear() !== toDate.getYear() && fromDate.getFullYear()}{" "}
        {fromDate.getTime() !== toDate.getTime() && <>au</>}{" "}
        {fromDate.getTime() !== toDate.getTime() && toDate.getDate()}{" "}
        {toDate.toLocaleDateString("fr", { month: "long" })}{" "}
        {toDate.getFullYear()}
      </p>

      {date.fromTime && date.toTime && (
        <ul
          css={css`
            list-style: none;
            padding: 0;

            li:not(:last-child):after {
              content: "+";
              margin: 0.5ch;
            }
          `}
        >
          <li>
            {date.fromTime.hour}h
            {date.fromTime.minute > 0 && date.fromTime.minute} à{" "}
            {date.toTime.hour}h{date.toTime.minute > 0 && date.toTime.minute}
          </li>
        </ul>
      )}

      {(!date.fromTime || !date.toTime) && <p>Horaire à venir</p>}
    </li>
  )
}

export default DateCard
