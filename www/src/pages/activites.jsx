// vendors
import React from "react"
import VisuallyHidden from "@reach/visually-hidden"
import css from "@emotion/css"

// components
import Layout from "../components/Layout"
import TextColumns from "../components/TextColumns/TextColumns"
import wrapper from "../utils/wrapper"
import { graphql } from "gatsby"
import Calendar from "../components/Calendar"
import { between } from "polished"
import mediaQuery from "../utils/media-query"
import { colors } from "../styles/variables"
import getWeeklyDateBetweenDate from "../../../utils/getWeeklyDateBetweenDate"
import SEO from "../components/Seo/Seo"
import ActivitySection from "../views/ActivitySection"

import dateStillAvailable from "../utils/datesStillAvailable"
import EventTargetAudienceLegend from "../components/EventTargetAudienceLegend"

const getClosestDate = (dates = []) => {
  return dates.reduce((acc, cur) =>
    Date.parse(acc.from) < Date.parse(cur.from) ? acc : cur
  )
}

const ActivitesPage = ({ data }) => {
  const activites = data.activites.group.reduce(
    (acc, cur) => [...acc, ...cur.nodes],
    []
  )

  const activityTypes = (data.activityTypes.edges || []).map(({ node }) => node)

  const getActivitesByTypeSlug = slug => {
    return (
      (data.activites.group.find(({ fieldValue }) => slug === fieldValue) || [])
        .nodes || []
    )
      .filter(({ date }) => dateStillAvailable(date))
      .sort((a, b) => {
        const closestA = getClosestDate(a.date)
        const closestB = getClosestDate(b.date)

        return Date.parse(closestA.from) > Date.parse(closestB.from)
      })
  }

  const calendarEvents = activites.reduce((acc, cur) => {
    const stillActive = dateStillAvailable(cur.date)

    const slug = cur.slug ? cur.slug.current : ""

    const link = stillActive ? `/activites#${slug}` : `/archives/${slug}`

    const dates = cur.date
      .reduce((datesAcc, date) => {
        const { day = [] } = date
        return [
          ...datesAcc,
          ...getWeeklyDateBetweenDate(date.from, date.to, day),
        ]
      }, [])
      .map(date => {
        return {
          slug,
          link,
          title: cur.title,
          date,
          targetAudience: cur.targetAudience,
        }
      })

    return [...acc, ...dates]
  }, [])

  return (
    <Layout>
      <SEO title="Activités" />
      <article
        css={css`
          ${wrapper.bolt()}
        `}
      >
        <VisuallyHidden>
          <h1>Activités</h1>
        </VisuallyHidden>

        <nav>
          <ul
            className="h2"
            css={css`
              max-width: 1340px;
              list-style: none;
              padding: 0;

              li {
                font-size: ${between("25px", "96px", "375px", "1920px")};
                margin-bottom: ${between("12.5px", "0px", "375px", "1920px")};

                :last-child {
                  margin-bottom: 0;
                }

                ${mediaQuery.greaterThen(1920)} {
                  font-size: 96px;
                  margin-bottom: 0px;
                }
              }

              a {
                text-decoration: none;
              }
            `}
          >
            {activityTypes.map(({ name, slug: { current }, alwaysOn }) => {
              return (
                (alwaysOn || getActivitesByTypeSlug(current).length > 0) && (
                  <li>
                    <a href={`#${current}`}>{name}</a>
                  </li>
                )
              )
            })}
          </ul>
        </nav>

        <section id="intro">
          <TextColumns className="h3 color-orange">
            <p className="prevent-column-break">
              Tout·e acteur·rice du milieu est essentiel·le au
              dévelop&shy;pement de l’art de la danse et du mouvement à Québec,
              car il·elle fait partie intégrante de celui-ci. L’investissement
              et l’inspiration insufflés dans la pratique de chaque artiste sur
              le territoire a des retombées notoires sur la vitalité de tout un
              milieu.
            </p>

            <p className="prevent-column-break">
              Toutes ces formations offertes par L’Artère permettent à nos
              artistes de briller dans leur parcours individuel et stimulent les
              échanges au sein et à l’extérieur du milieu de l’art de la danse
              et du mouvement de Québec.
            </p>
          </TextColumns>

          <div className="h3">
            <p>
              Calendrier des activités
              {/* pour les{" "}
              <span className="color-orange">
                professionnel·le·s des arts de la danse et du mouvement.
              </span> */}
            </p>

            {/* <p>
              Activités ouvertes aux{" "}
              <span className="color-canary">
                bougeur·se·s expérimenté·e·s (cirque, arts martiaux, danse,
                etc.)
              </span>{" "}
              <span className="color-pale-cerulean">
                aux artistes des arts de la scène (théâtre, musique,
                performance, cinéma),
              </span>{" "}
              <span className="color-grey">et au le grand public</span>.
            </p> */}
          </div>

          <EventTargetAudienceLegend />

          <Calendar switcher events={calendarEvents} />
        </section>

        <div>
          {activityTypes.map(
            ({
              name,
              slug: { current },
              alwaysOn,
              _rawDescription,
              display,
              order,
            }) => {
              return (
                (alwaysOn || getActivitesByTypeSlug(current).length > 0) && (
                  <ActivitySection
                    activities={getActivitesByTypeSlug(current)}
                    description={_rawDescription}
                    title={name}
                    id={current}
                    grid={display === "grid"}
                    sortOrder={order}
                  />
                )
              )
            }
          )}
        </div>
      </article>
    </Layout>
  )
}

export default ActivitesPage

export const query = graphql`
  query ActivitesPageQuery {
    activityTypes: allSanityEventType(sort: { fields: order, order: ASC }) {
      edges {
        node {
          name
          order
          alwaysOn
          display
          _rawDescription
          slug {
            current
          }
        }
      }
    }

    activites: allSanityEvent {
      group(field: eventType___slug___current) {
        fieldValue
        totalCount
        nodes {
          eventType {
            name
            slug {
              current
            }
            order
          }
          slug {
            current
          }
          targetAudience
          title
          _rawDescription
          _rawAdditionalInformation
          featuredImage {
            alt
            asset {
              fluid {
                src
                srcSet
                srcSetWebp
              }
            }
          }
          date {
            ... on SanityDaily {
              _type
              from
              to
              fromTime {
                hour
                minute
              }
              toTime {
                hour
                minute
              }
            }
            ... on SanitySingleEvent {
              _type
              from
              fromTime {
                hour
                minute
              }
              to
              toTime {
                hour
                minute
              }
            }
            ... on SanityWeekly {
              _type
              from
              day
              fromTime {
                hour
                minute
              }
              to
              toTime {
                hour
                minute
              }
            }
          }
          venue {
            city
            local
            name
            street
            zip
          }
          rate {
            ... on SanityFree {
              voluntaryContribution
              _type
            }
            ... on SanityRegularRate {
              _type
              amount
              by
              member
            }
          }
          registration {
            ... on SanityRegistrationEmail {
              _type
              email
            }
            ... on SanityRegistrationLink {
              _type
              url
            }
          }
        }
      }
    }
  }
`
