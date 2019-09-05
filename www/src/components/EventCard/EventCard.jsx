// vendors
import React from "react"
import css from "@emotion/css"
import { colors } from "../../styles/variables"
import VisuallyHidden from "@reach/visually-hidden"
import PortableText from "../PortableText/PortableText"
import Collapse from "../Collapse/Collapse"
import { hideVisually } from "polished"

const EventCard = ({ event, hiddenTitle = false, title = null, ...props }) => {
  let fromDate = null
  let toDate = null
  let hours = []

  if (event.date && event.date.length > 0) {
    fromDate = new Date(
      Math.min.apply(
        null,
        event.date.map(({ from }) => new Date(`${from} 00:00:00`))
      )
    )
    toDate = new Date(
      Math.min.apply(
        null,
        event.date.map(({ to }) => new Date(`${to} 00:00:00`))
      )
    )
    hours = event.date.reduce((acc, { fromTime, toTime }) => {
      const found = acc.find(
        ({ fromTime: from, toTime: to }) => fromTime === from && toTime === to
      )
      return found ? acc : [...acc, { fromTime, toTime }]
    }, [])
  }

  return (
    <article
      id={event.slug.current}
      css={css`
        display: flex;
        justify-content: space-between;
        margin: ${285 / 33}em 0;
      `}
      {...props}
    >
      <div
        css={css`
          order: 2;
          flex-basis: 0;
          flex-grow: 999;
        `}
      >
        <section
          css={css`
            ${hiddenTitle && hideVisually()}
          `}
        >
          <h1
            className="h2 color-orange"
            css={css`
              margin: 0 0 1rem;
            `}
          >
            {title ? title : event.title}
          </h1>

          {event._rawDescription && (
            <Collapse>
              <PortableText blocks={event._rawDescription} />
            </Collapse>
          )}
        </section>

        <section
          css={css`
            margin-top: ${150 / 33}em;

            ${hiddenTitle &&
              css`
                margin-top: 0;
              `}
          `}
        >
          <p
            className="h2 color-orange"
            css={css`
              margin: 0 0 1rem;
            `}
          >
            {event.artist}
          </p>

          {event._rawArtistDescription && (
            <Collapse>
              <PortableText blocks={event._rawArtistDescription} />
            </Collapse>
          )}
        </section>
      </div>

      <div
        css={css`
          flex-grow: 1;
          max-width: 480px;
          margin-right: 200px;
        `}
      >
        <p
          aria-hidden="true"
          role="presentation"
          css={css`
            margin: 0;
          `}
        >
          {event.title}
          <br />
          {event.artist}
        </p>

        {event.targetAudience.length > 0 && (
          <section>
            <VisuallyHidden>
              <h2>Public cible</h2>
            </VisuallyHidden>

            <ul
              css={css`
                margin-top: 0;
                margin-bottom: 1em;
                padding: 0;
                list-style: none;

                li {
                  display: inline-block;
                  :not(:last-child):after {
                    content: "+";
                    margin: 0 0.35ch;
                    color: ${colors.text};
                  }
                }

                abbr {
                  text-decoration: none;
                }
              `}
            >
              {event.targetAudience.includes("professionnel") && (
                <li className="color-orange">
                  <abbr title="Professionnel·le·s des arts de la danse et du mouvement">
                    P
                  </abbr>
                </li>
              )}

              {event.targetAudience.includes("sceneArtist") && (
                <li className="color-canary">
                  <abbr title="Bougeur·se·s expérimenté·e·s (cirque, arts martiaux, danse, etc.)">
                    B
                  </abbr>
                </li>
              )}

              {event.targetAudience.includes("artist") && (
                <li className="color-pale-cerulean">
                  <abbr title="Artistes des arts de la scène (théâtre, musique, perfomance, cinéma)">
                    A
                  </abbr>
                </li>
              )}

              {event.targetAudience.includes("generalPublic") && (
                <li>
                  <abbr title="Grand public">GP</abbr>
                </li>
              )}
            </ul>
          </section>
        )}

        <section>
          <VisuallyHidden>
            <h2>Date et horaire</h2>
          </VisuallyHidden>

          {event.date && (
            <div>
              <p
                css={css`
                  margin-bottom: 0;
                `}
              >
                {fromDate.getDate()}{" "}
                {fromDate.getMonth() !== toDate.getMonth() &&
                  fromDate.toLocaleDateString("fr", { month: "long" })}{" "}
                {fromDate.getYear() !== toDate.getYear() &&
                  fromDate.getFullYear()}{" "}
                {fromDate.getTime() !== toDate.getTime() && <>au</>}{" "}
                {fromDate.getTime() !== toDate.getTime() && toDate.getDate()}{" "}
                {toDate.toLocaleDateString("fr", { month: "long" })}{" "}
                {toDate.getFullYear()}
              </p>

              {hours.length > 0 && (
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
                  {hours.map(time => (
                    <li>
                      {time.fromTime.hour}h
                      {time.fromTime.minute > 0 && time.fromTime.minute} à{" "}
                      {time.toTime.hour}h
                      {time.toTime.minute > 0 && time.toTime.minute}
                    </li>
                  ))}
                </ul>
              )}

              {hours.length < 1 && <p>Horaire à venir</p>}
            </div>
          )}

          {!event.date && (
            <p
              css={css`
                margin-bottom: 0;
              `}
            >
              Date à venir
            </p>
          )}
        </section>

        <section>
          <VisuallyHidden>
            <h2>Lieu</h2>
          </VisuallyHidden>

          <p
            css={css`
              margin-top: 0;
            `}
          >
            <a href="http://www.maisonpourladanse.ca/">Maison pour la danse</a>
          </p>
        </section>

        <section>
          <VisuallyHidden>
            <h2>Prix</h2>
          </VisuallyHidden>
        </section>

        {event._rawAdditionalInformation && (
          <section>
            <VisuallyHidden>
              <h2>Informations Suplémentaires</h2>
            </VisuallyHidden>

            <div
              css={css`
                font-size: ${25 / 33}em;
              `}
            >
              <PortableText blocks={event._rawAdditionalInformation} />
            </div>
          </section>
        )}

        <section>
          <VisuallyHidden>
            <h2>Inscription</h2>
          </VisuallyHidden>

          <p>
            <a
              href="mailto:inscriptions@larteredanse.ca"
              css={css`
                color: ${colors.PortlandOrange};
              `}
            >
              inscriptions@larteredanse.ca
            </a>
          </p>
        </section>
      </div>
    </article>
  )
}

export default EventCard
