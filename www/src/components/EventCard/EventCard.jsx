// vendors
/** @jsx jsx */
import { jsx } from "@emotion/react"
import React from "react"
import { css } from "@emotion/react"
import { colors } from "../../styles/variables"
import VisuallyHidden from "@reach/visually-hidden"
import PortableText from "../PortableText/PortableText"
import Collapse from "../Collapse/Collapse"
import getByTerm from "../../../../utils/getByTerm"
import Button from "../Button/Button"
import { linkStyle } from "../../styles/global"
import DateCard from "./DateCard"
import { getSrc, getSrcSet } from "gatsby-plugin-image"

const EventCard = ({ event, small = false, ...props }) => {
  const src = getSrc(event.featuredImage.asset)
  const srcSet = getSrcSet(event.featuredImage.asset)

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

                  ${event.featuredImage &&
                  event.featuredImage.hotspot &&
                  css`
                    object-position: ${event.featuredImage.hotspot.x * 100}%
                      ${event.featuredImage.hotspot.y * 100}%;
                  `}
                }
              `}
            >
              {event.featuredImage && (
                <img
                  sizes="(min-width: 514px) 480px, 94vw"
                  srcset={srcSet}
                  src={src}
                  alt={event.featuredImage.alt}
                />
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

          <section>
            <VisuallyHidden>
              <h2>Date et horaire</h2>
            </VisuallyHidden>

            {event.date && (
              <ul
                css={css`
                  list-style: none;
                  padding: 0;
                `}
              >
                {event.date.map((date) => (
                  <DateCard date={date} />
                ))}
              </ul>
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
                {event.rate.map((rate) => (
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

          {event.targetAudience && event.targetAudience.length > 0 && (
            <section>
              <VisuallyHidden>
                <h2>Public cible</h2>
              </VisuallyHidden>

              <ul
                css={css`
                  list-style: none;
                  padding-left: 0;
                  display: flex;

                  li {
                    padding: 0em 0.5em;
                  }

                  abbr {
                    text-decoration: none;
                  }
                `}
              >
                {event.targetAudience.map((target) => {
                  if (target === "professionnel")
                    return (
                      <li
                        css={css`
                          background-color: ${colors.PortlandOrange};
                        `}
                      >
                        <abbr title="Professionnel·le·s des arts de la danse et du mouvement">
                          Professionnel·le·s
                        </abbr>
                      </li>
                    )
                  if (target === "artist")
                    return (
                      <li
                        css={css`
                          background-color: ${colors.PaleCerulean};
                        `}
                      >
                        <abbr title="Bougeur·se·s expérimenté·e·s et artistes des arts de la scène (cirque • arts martiaux • théâtre • musique • etc.)">
                          Bougeur·se·s
                        </abbr>
                      </li>
                    )
                  if (target === "generalPublic")
                    return (
                      <li
                        css={css`
                          background-color: ${colors.canary};
                        `}
                      >
                        Tout public
                      </li>
                    )
                })}
              </ul>
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
                {event.registration.map((el) => {
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

              h1,
              h2,
              h3,
              h4,
              h5,
              h6 {
                a {
                  ${linkStyle}
                }
              }
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
