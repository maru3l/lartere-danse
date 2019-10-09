// vendors
import React from "react"
import css from "@emotion/css"
import EventCard from "../components/EventCard/EventCard"
import PortableText from "../components/PortableText/PortableText"
import TextColumns from "../components/TextColumns/TextColumns"

const DefaultActivitySection = ({
  activities = [],
  description,
  grid = false,
  id,
  sortOrder,
  title,
}) => {
  return (
    <section
      id={id}
      css={css`
        order: ${sortOrder};
      `}
    >
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      {description && (
        <div
          css={css`
            max-width: 960px;
          `}
        >
          <PortableText blocks={description} />
        </div>
      )}

      {activities.length > 0 && (
        <ul
          css={[
            css`
              list-style: none;
              padding: 0;
            `,
            grid
              ? css`
                  display: grid;
                  margin: 0;
                  justify-content: space-between;
                  grid-template-columns: repeat(
                    auto-fill,
                    minmax(290px, 480px)
                  );

                  /* stylelint-disable-next-line no-descending-specificity */
                  article {
                    margin: 0;
                  }
                `
              : css`
                  li:first-child article {
                    margin-top: 0px;
                  }
                  li:last-child article {
                    margin-bottom: 0px;
                  }
                `,
          ]}
        >
          {activities.map(event => (
            <li>
              <EventCard event={event} small={grid} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

const StageIntensifsActivitySection = ({
  activities = [],
  grid = false,
  id,
  sortOrder,
}) => {
  return (
    <section
      id={id}
      css={css`
        order: ${sortOrder};
      `}
    >
      <h2>
        Stages <br />
        intensifs
      </h2>

      <TextColumns>
        <p>
          Dans son but d’offrir du perfect&shy;ionnement tout au long de
          l’année, L’Artère a mis en place des stages et classes régulières
          donnés par des professeur·e·s de Québec et d’ailleurs. Dépendamment
          des activités, il est possible de s’inscrire à la classe. Nous offrons
          également des stages avec des danseur·se·s souhaitant parfaire leur
          enseignement.
        </p>

        <h3>Le saviez-vous?</h3>

        <p>
          Les interprètes admissibles peuvent obtenir un soutien financier du
          Regroupement québécois de la danse s’ils·elles sont admis·es au{" "}
          <a href="https://premiereovation.com/programmes-aide/danse-presentation.aspx">
            Programme de soutien à l’entraînement
          </a>
          .
        </p>
      </TextColumns>

      {activities.length > 0 && (
        <ul
          css={[
            css`
              list-style: none;
              padding: 0;
            `,
            grid
              ? css`
                  display: grid;
                  margin: 0;
                  justify-content: space-between;
                  grid-template-columns: repeat(
                    auto-fill,
                    minmax(290px, 480px)
                  );

                  /* stylelint-disable-next-line no-descending-specificity */
                  article {
                    margin: 0;
                  }
                `
              : css`
                  li:first-child article {
                    margin-top: 0px;
                  }
                  li:last-child article {
                    margin-bottom: 0px;
                  }
                `,
          ]}
        >
          {activities.map(event => (
            <li>
              <EventCard event={event} small={grid} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

const SessionImprovisationActivitySection = ({
  activities = [],
  grid = false,
  id,
  sortOrder,
}) => {
  return (
    <section
      id={id}
      css={css`
        order: ${sortOrder};
      `}
    >
      <h2>
        SIA / Session d’impro&shy;visation <br />
        de L'Artère
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
          Our job is not to make art, our job is to create a space for art to
          happen in.
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

      {activities.length > 0 && (
        <ul
          css={[
            css`
              list-style: none;
              padding: 0;
            `,
            grid
              ? css`
                  display: grid;
                  margin: 0;
                  justify-content: space-between;
                  grid-template-columns: repeat(
                    auto-fill,
                    minmax(290px, 480px)
                  );

                  /* stylelint-disable-next-line no-descending-specificity */
                  article {
                    margin: 0;
                  }
                `
              : css`
                  li:first-child article {
                    margin-top: 0px;
                  }
                  li:last-child article {
                    margin-bottom: 0px;
                  }
                `,
          ]}
        >
          {activities.map(event => (
            <li>
              <EventCard event={event} small={grid} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

const ActivitySection = ({
  activities = [],
  description,
  grid = false,
  id,
  sortOrder,
  title,
}) => {
  switch (id) {
    case "stages-intensifs":
      return (
        <StageIntensifsActivitySection
          activities={activities}
          description={description}
          grid={grid}
          id={id}
          sortOrder={sortOrder}
          title={title}
        />
      )

    case "session-improvisation-artere":
      return (
        <SessionImprovisationActivitySection
          activities={activities}
          description={description}
          grid={grid}
          id={id}
          sortOrder={sortOrder}
          title={title}
        />
      )

    default:
      return (
        <DefaultActivitySection
          activities={activities}
          description={description}
          grid={grid}
          id={id}
          sortOrder={sortOrder}
          title={title}
        />
      )
  }
}

export default ActivitySection
