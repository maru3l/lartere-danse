// vendors
import React from "react"
import VisuallyHidden from "@reach/visually-hidden"
import css from "@emotion/css"

// components
import Layout from "../components/Layout"
import TextColumns from "../components/TextColumns/TextColumns"
import wrapper from "../utils/wrapper"
import { graphql } from "gatsby"
import EventCard from "../components/EventCard/EventCard"
import Calendar from "../components/Calendar"
import { between } from "polished"
import mediaQuery from "../utils/media-query"
import { colors } from "../styles/variables"
import getWeeklyDateBetweenDate from "../../../utils/getWeeklyDateBetweenDate"
import SEO from "../components/Seo/Seo"

const now = new Date()

const filterIfStillAvailable = event => {
  const oldest = event.date.reduce((acc, cur) =>
    Date.parse(acc.to) > Date.parse(cur.to) ? acc : cur
  )

  return (
    Date.parse(now.getFullYear(), now.getMonth(), 1) < Date.parse(oldest.to)
  )
}

const ActivitesPage = ({ data }) => {
  const intensiveCourses =
    (
      data.activites.group.find(
        ({ fieldValue }) => "intensiveCourses" === fieldValue
      ) || []
    ).nodes || []

  const masterClasses =
    (
      data.activites.group.find(
        ({ fieldValue }) => "masterClasses" === fieldValue
      ) || []
    ).nodes || []

  const creativeWorkshops =
    (
      data.activites.group.find(
        ({ fieldValue }) => "creativeWorkshops" === fieldValue
      ) || []
    ).nodes || []

  const creativeWorkshopFieldTrip =
    (
      data.activites.group.find(
        ({ fieldValue }) => "creativeWorkshopFieldTrip" === fieldValue
      ) || []
    ).nodes || []

  const ImprovisationSession =
    (
      data.activites.group.find(
        ({ fieldValue }) => "ImprovisationSession" === fieldValue
      ) || []
    ).nodes || []

  const CommonPlaces =
    (
      data.activites.group.find(
        ({ fieldValue }) => "CommonPlaces" === fieldValue
      ) || []
    ).nodes || []

  const talk =
    (data.activites.group.find(({ fieldValue }) => "talk" === fieldValue) || [])
      .nodes || []

  const calendarEvents = [
    ...intensiveCourses,
    ...masterClasses,
    ...creativeWorkshops,
    ...creativeWorkshopFieldTrip,
    ...ImprovisationSession,
    ...CommonPlaces,
    ...talk,
  ].reduce((acc, cur) => {
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
          slug: cur.slug ? cur.slug.current : "",
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
            <li>
              <a href="#stages-intensifs">Stages intensifs</a>
            </li>
            <li>
              <a href="#classes-de-maitres">Classes de maître</a>
            </li>
            <li>
              <a href="#ateliers-de-creation">Ateliers de création</a>
            </li>
            <li>
              <a href="#sorties-dateliers-de-creation">
                Sorties d’atelier de création
              </a>
            </li>
            <li>
              <a href="#session-improvisation-artere">
                Session d’improvisation de&nbsp;L’Artère (SIA)
              </a>
            </li>
            <li>
              <a href="#lieux-communs">Lieux communs</a>
            </li>
            <li>
              <a href="#causeries">Causerie / 5 à 7</a>
            </li>
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
              Calendrier des activitées pour les{" "}
              <span className="color-orange">
                professionnel·le·s des arts de la danse et du mouvement.
              </span>
            </p>

            <p>
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
            </p>
          </div>

          <ul
            css={css`
              list-style: none;
              padding: 0;
              margin: 0 0 5em 0;

              li {
                display: flex;
              }

              li:before {
                order: 0;
                flex-basis: 48px;
                flex-shrink: 0;
                width: 48px;
                height: 24px;
                content: "";
                display: inline-block;
              }

              li:after {
                order: 1;
                content: " = ";
                display: inline-block;
                padding: 0 0.5ch;
              }

              span {
                order: 2;
              }
            `}
          >
            <li
              css={css`
                :before {
                  background-color: ${colors.PortlandOrange};
                }
              `}
            >
              {" "}
              <span>
                Professionnel·le·s des arts de la danse et du mouvement
              </span>
            </li>
            <li
              css={css`
                :before {
                  background-color: ${colors.PaleCerulean};
                }
              `}
            >
              {" "}
              <span>
                Artistes des arts de la scène (théâtre, musique, perfomance,
                cinéma)
              </span>
            </li>
            <li
              css={css`
                :before {
                  background-color: ${colors.canary};
                }
              `}
            >
              {" "}
              <span>
                Bougeur·se·s expérimenté·e·s (cirque, arts martiaux, danse,
                etc.)
              </span>
            </li>
            <li
              css={css`
                :before {
                  background-color: ${colors.grey};
                }
              `}
            >
              {" "}
              <span>Grand public</span>
            </li>
          </ul>

          <Calendar switcher events={calendarEvents} />
        </section>

        <section id="stages-intensifs">
          <h2>
            Stages <br />
            intensifs
          </h2>

          <TextColumns>
            <p>
              Dans son but d’offrir du perfect&shy;ionnement tout au long de
              l’année, L’Artère a mis en place des stages et classes régulières
              donnés par des professeur·e·s de Québec et d’ailleurs.
              Dépendamment des activités, il est possible de s’inscrire à la
              classe. Nous offrons également des stages avec des danseur·se·s
              souhaitant parfaire leur enseignement.
            </p>

            <h3>Le saviez-vous?</h3>

            <p>
              Les interprètes admissibles peuvent obtenir un soutien financier
              du Regroupement québécois de la danse s’ils·elles sont admis·es au{" "}
              <a href="https://premiereovation.com/programmes-aide/danse-presentation.aspx">
                Programme de soutien à l’entraînement
              </a>
              .
            </p>
          </TextColumns>

          {intensiveCourses.length > 0 && (
            <section>
              <VisuallyHidden>
                <h3>Stages intensifs à venir</h3>
              </VisuallyHidden>
              <ul
                css={css`
                  list-style: none;
                  padding: 0;
                  li:first-child article {
                    margin-top: 0px;
                  }
                  li:last-child article {
                    margin-bottom: 0px;
                  }
                `}
              >
                {intensiveCourses.map(event => (
                  <li>
                    <EventCard event={event} />
                  </li>
                ))}
              </ul>
            </section>
          )}
        </section>

        <section id="classes-de-maitres">
          <h2>Classes de maîtres</h2>

          {masterClasses.length > 0 && (
            <section>
              <VisuallyHidden>
                <h3>Classes de maîtres à venir</h3>
              </VisuallyHidden>
              <ul
                css={css`
                  list-style: none;
                  padding: 0;

                  li:first-child article {
                    margin-top: 0px;
                  }
                  li:last-child article {
                    margin-bottom: 0px;
                  }
                `}
              >
                {masterClasses.map(event => (
                  <li>
                    <EventCard event={event} />
                  </li>
                ))}
              </ul>
            </section>
          )}
        </section>

        <section id="ateliers-de-creation">
          <h2>
            Ateliers de
            <br />
            création
          </h2>

          {creativeWorkshops.length > 0 && (
            <section>
              <VisuallyHidden>
                <h3>Ateliers de création à venir</h3>
              </VisuallyHidden>
              <ul
                css={css`
                  list-style: none;
                  padding: 0;

                  li:first-child article {
                    margin-top: 0px;
                  }
                  li:last-child article {
                    margin-bottom: 0px;
                  }
                `}
              >
                {creativeWorkshops.map(event => (
                  <li>
                    <EventCard event={event} hiddenTitle />
                  </li>
                ))}
              </ul>
            </section>
          )}
        </section>

        <section id="sorties-dateliers-de-creation">
          <h2
            css={css`
              margin-bottom: 0;
            `}
          >
            Sorties d'ateliers <br />
            de création
          </h2>

          <p
            css={css`
              max-width: 960px;
            `}
          >
            Comme suite des ateliers de création offerts par L’Artère, le public
            est convié à une présentation informelle dévoilant le travail
            effectué par les participant·e·s.
          </p>

          {creativeWorkshopFieldTrip.length > 0 && (
            <section>
              <VisuallyHidden>
                <h3>Sorties d'ateliers de création à venir</h3>
              </VisuallyHidden>
              <ul
                css={css`
                  display: grid;
                  list-style: none;
                  margin: 0;
                  padding: 0;
                  justify-content: space-between;
                  grid-template-columns: repeat(
                    auto-fill,
                    minmax(290px, 480px)
                  );

                  /* stylelint-disable-next-line no-descending-specificity */
                  article {
                    margin: 0;
                  }
                `}
              >
                {creativeWorkshopFieldTrip.map(event => (
                  <li>
                    <EventCard event={event} hiddenTitle hideDetail />
                  </li>
                ))}
              </ul>
            </section>
          )}
        </section>

        <section id="session-improvisation-artere">
          <h2>
            Session d’impro&shy;visation <br />
            de L'Artère (SIA)
          </h2>

          <blockquote
            className="h3 color-orange"
            css={css`
              margin-left: 0;
              max-width: 675px;
            `}
          >
            <p
              css={css`
                :before {
                  content: "«";
                }
                :after {
                  content: "»";
                }
              `}
            >
              Our job is not to make art, our job is to create a space for art
              to happen in.
            </p>

            <footer
              css={css`
                :before {
                  content: "—";
                  margin-right: 0.5ch;
                }
              `}
            >
              Ady Elzam / improvisateur invité à&nbsp;L’Artère
            </footer>
          </blockquote>

          {ImprovisationSession.length > 0 && (
            <section>
              <VisuallyHidden>
                <h3>Session d’improvisation de L'Artère à venir</h3>
              </VisuallyHidden>
              <ul
                css={css`
                  list-style: none;
                  padding: 0;

                  li:first-child article {
                    margin-top: 0px;
                  }
                  li:last-child article {
                    margin-bottom: 0px;
                  }
                `}
              >
                {ImprovisationSession.map(event => (
                  <li>
                    <EventCard event={event} />
                  </li>
                ))}
              </ul>
            </section>
          )}
        </section>

        <section id="lieux-communs">
          <h2>Lieux communs</h2>

          <div
            css={css`
              max-width: 960px;
            `}
          >
            <p>
              L'Artère, Jérémie Aubry et Etienne Lambert convient le grand
              public à une soirée où mots et musique se côtoient et
              s’entrelacent pour permettre à chacun·e d’improviser ou d’être
              témoin des rencontres qui se tissent tout au long de la soirée.
            </p>

            <p>
              Que vous soyez spectateur·rice ou acteur·rice, passif·ve ou
              actif·ve, la table sera mise pour que vous puissiez donner libre
              cours à vos élans créatifs! Nous acceptons la présence de tou·te·s
              créateur·rice·s, peu importe la discipline.
            </p>
          </div>

          {CommonPlaces.length > 0 && (
            <section>
              <VisuallyHidden>
                <h3>Sorties d'ateliers de création à venir</h3>
              </VisuallyHidden>
              <ul
                css={css`
                  display: grid;
                  list-style: none;
                  margin: 0;
                  padding: 0;
                  justify-content: space-between;
                  grid-template-columns: repeat(
                    auto-fill,
                    minmax(290px, 480px)
                  );

                  /* stylelint-disable-next-line no-descending-specificity */
                  article {
                    margin: 0;
                  }
                `}
              >
                {CommonPlaces.map(event => (
                  <li>
                    <EventCard event={event} hiddenTitle hideDetail />
                  </li>
                ))}
              </ul>
            </section>
          )}
        </section>

        <section id="causeries">
          <h2>Causeries / 5 à 7</h2>

          {talk.length > 0 && (
            <section>
              <VisuallyHidden>
                <h3>Sorties d'ateliers de création à venir</h3>
              </VisuallyHidden>
              <ul
                css={css`
                  display: grid;
                  list-style: none;
                  margin: 0;
                  padding: 0;
                  justify-content: space-between;
                  grid-template-columns: repeat(
                    auto-fill,
                    minmax(290px, 480px)
                  );

                  /* stylelint-disable-next-line no-descending-specificity */
                  article {
                    margin: 0;
                  }
                `}
              >
                {talk.map(event => (
                  <li>
                    <EventCard event={event} hiddenTitle hideDetail />
                  </li>
                ))}
              </ul>
            </section>
          )}
        </section>
      </article>
    </Layout>
  )
}

export default ActivitesPage

export const query = graphql`
  query ActivitesPageQuery {
    activites: allSanityEvent {
      group(field: eventType) {
        fieldValue
        nodes {
          artist
          eventType
          slug {
            current
          }
          subscriptionLink
          targetAudience
          title
          _rawArtistDescription
          _rawDescription
          _rawAdditionalInformation
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
        }
      }
    }
  }
`
