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
  console.log(date.from)
  const [fromYear, fromMonth, fromDate] = date.from.split("-")
  const [toYear, toMonth, toDate] = date.to.split("-")
  const fromDateObj = new Date(fromYear, fromMonth - 1, fromDate)
  const toDateObj = new Date(toYear, toMonth - 1, toDate)

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
        {fromDateObj.getDate()}{" "}
        {fromDateObj.getMonth() !== toDateObj.getMonth() &&
          fromDateObj.toLocaleDateString("fr", { month: "long" })}{" "}
        {fromDateObj.getYear() !== toDateObj.getYear() &&
          fromDateObj.getFullYear()}{" "}
        {fromDateObj.getTime() !== toDateObj.getTime() && <>au</>}{" "}
        {fromDateObj.getTime() !== toDateObj.getTime() && toDateObj.getDate()}{" "}
        {toDateObj.toLocaleDateString("fr", { month: "long" })}{" "}
        {toDateObj.getFullYear()}
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
