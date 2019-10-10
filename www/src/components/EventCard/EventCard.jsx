// vendors
import React from "react"
import css from "@emotion/css"
import { colors } from "../../styles/variables"
import VisuallyHidden from "@reach/visually-hidden"
import PortableText from "../PortableText/PortableText"
import Collapse from "../Collapse/Collapse"
import getByTerm from "../../../../utils/getByTerm"
import Button from "../Button/Button"

const EventCard = ({ event, small = false, ...props }) => {
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
        margin: ${485 / 33}em 0;
      `}
      {...props}
    >
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            flex-grow: 1;
            flex-basis: 480px;
            max-width: 480px;
          `}
        >
          {!small && (
            <picture
              css={css`
                width: 100%;
                display: block;
                overflow: hidden;
                line-height: 0;
                position: relative;
                background-color: ${colors.PortlandOrange};

                ::before {
                  display: block;
                  padding-bottom: ${(104 / 202) * 100}%;
                  content: "";
                }

                > * {
                  filter: grayscale();
                  position: absolute;
                  top: 0;
                  mix-blend-mode: multiply;
                  right: 0;
                  bottom: 0;
                  left: 0;
                  object-fit: cover;
                  width: 100%;
                  height: 100%;
                }
              `}
            >
              {event.featuredImage && (
                <>
                  <img
                    src={event.featuredImage.asset.fluid.src}
                    alt={event.featuredImage.alt}
                  />
                </>
              )}
            </picture>
          )}

          {small && (
            <h1
              className="p"
              css={css`
                margin: 0;
              `}
            >
              {event.title}
            </h1>
          )}

          {/* {event.targetAudience.length > 0 && (
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
          )} */}

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

          {event.venue && (
            <section>
              <VisuallyHidden>
                <h2>Lieu</h2>
              </VisuallyHidden>

              <p
                css={css`
                  margin-top: 0;
                `}
              >
                <a
                  href={`https://www.google.com/maps/place/${encodeURI(
                    `${event.venue.street},+${event.venue.city},+${event.venue.zip}`
                  )}/`}
                >
                  {event.venue.name}
                </a>
              </p>
            </section>
          )}

          {event.rate && event.rate.length > 0 && (
            <section>
              <VisuallyHidden>
                <h2>Prix</h2>
              </VisuallyHidden>

              <ul
                css={css`
                  list-style: none;
                  padding: 0;
                `}
              >
                {event.rate.map(rate => (
                  <li>
                    {rate._type === "regularRate" && (
                      <>
                        {rate.amount}${rate.by && <>/</>}
                        {rate.by && getByTerm(rate.by)} (
                        {rate.member ? "membre" : "non-membres"})
                      </>
                    )}
                    {rate._type === "free" && (
                      <>
                        {rate.voluntaryContribution
                          ? "Contribution volontaire"
                          : "Gratuit"}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}

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

          {event.registration && (
            <section>
              <VisuallyHidden>
                <h2>Inscription</h2>
              </VisuallyHidden>

              <p
                css={css`
                  margin-top: 3em;
                `}
              >
                {event.registration.map(el => {
                  return (
                    <>
                      {el._type === "registrationEmail" && (
                        <a
                          href={`mailto:${el.email}`}
                          css={css`
                            color: ${colors.PortlandOrange};
                          `}
                        >
                          {el.email}
                        </a>
                      )}

                      {el._type === "registrationLink" && (
                        <Button
                          tag="a"
                          href={el.url}
                          secondary
                          css={css`
                            font-size: ${54 / 33}em;
                          `}
                        >
                          Inscription
                        </Button>
                      )}
                    </>
                  )
                })}
              </p>
            </section>
          )}
        </div>

        {!small && (
          <div
            css={css`
              flex-grow: 999;
              flex-basis: 0;
              min-width: 50%;
              max-width: 1020px;
            `}
          >
            <section>
              <h1
                aria-hidden="true"
                role="presentation"
                className="h2 color-orange"
                css={css`
                  margin: 0 0 1rem;
                `}
              >
                {event.title}
              </h1>

              {event._rawDescription && (
                <Collapse>
                  <PortableText blocks={event._rawDescription} />
                </Collapse>
              )}
            </section>
          </div>
        )}
      </div>
    </article>
  )
}

export default EventCard
