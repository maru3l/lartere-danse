// vendors
/** @jsx jsx */
import { jsx } from "@emotion/react"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo/Seo"
import { graphql, Link } from "gatsby"
import VisuallyHidden from "@reach/visually-hidden"
import { css } from "@emotion/react"

import datesStillAvailable from "../utils/datesStillAvailable"
import wrapper from "../utils/wrapper"
import { colors } from "../styles/variables"
import mediaQuery from "../utils/media-query"
import { getSrc, getSrcSet } from "gatsby-plugin-image"

const ArchiveCard = ({ title, picture, slug, ...props }) => {
  console.log(picture)
  const src = getSrc(picture.asset)
  const srcSet = getSrcSet(picture.asset)

  console.log(src)

  return (
    <div
      css={css`
        width: 100%;
        display: block;
        position: relative;
      `}
      {...props}
    >
      <Link
        to={`/archives/${slug}`}
        css={css`
          text-decoration: none;
          color: inherit;

          :hover {
            color: ${colors.PortlandOrange};
          }
        `}
      >
        <picture
          css={css`
            width: 100%;
            display: block;
            overflow: hidden;
            line-height: 0;
            position: relative;
            background-color: ${colors.Isabelline};

            ::before {
              display: block;
              padding-bottom: ${(86 / 140) * 100}%;
              content: "";
            }

            > * {
              filter: grayscale();
              position: absolute;
              mix-blend-mode: multiply;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              object-fit: cover;
              width: 100%;
              height: 100%;
              ${picture &&
              picture.hotspot &&
              css`
                object-position: ${picture.hotspot.x * 100}%
                  ${picture.hotspot.y * 100}%;
              `}
            }
          `}
        >
          {picture && (
            <img
              sizes="
            (min-width: 653px) 46vw,
            (min-width: 994px) 30vw,
            (min-width: 1348px) 23vw,
            (min-width: 1920px) 478px,
            94vw
          "
              srcset={srcSet}
              src={src}
              alt={picture.alt}
            />
          )}
        </picture>
        <div
          css={css`
            font-size: 100%;
            margin: 1rem 0;
          `}
        >
          {title}
        </div>
      </Link>
    </div>
  )
}

const ArchivesPage = ({ data }) => {
  const events = (data.events.edges || [])
    .filter(({ node: { date } }) => !datesStillAvailable(date))
    .map(({ node }) => node)

  return (
    <Layout themeColor="LIGHT">
      <SEO
        title="Archives"
        description="Pour parcourir les archives des activités et des artistes ayant été de passage à L’Artère, art de la danse et du mouvement."
      />
      <div
        css={css`
          ${wrapper.bolt()}
          margin-top: 5rem;
          margin-bottom: 5rem;
        `}
      >
        <VisuallyHidden>
          <h1>Archives</h1>
        </VisuallyHidden>

        <div
          css={css`
            display: grid;
            grid-gap: ${(30 / 1920) * 100}vw;

            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

            ${mediaQuery.greaterThen(1650)} {
              grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
            }
            ${mediaQuery.greaterThen(1920)} {
              grid-gap: 30px;
            }
          `}
        >
          <div />

          {events.map((node) => (
            <ArchiveCard
              title={node.title}
              slug={node.slug.current}
              picture={
                node.featuredImage
                  ? {
                      asset: node.featuredImage.asset,
                      alt: node.featuredImage.alt,
                      hotspot: node.featuredImage.hotspot || null,
                    }
                  : {}
              }
            />
          ))}
        </div>

        <div>
          <p className="h2">2012-2019</p>

          <ul
            css={css`
              list-style: none;
              padding: 0;
              columns: 1;

              ${mediaQuery.greaterThen(650)} {
                columns: 2;
              }

              ${mediaQuery.greaterThen(1560)} {
                columns: 3;
              }

              li {
                margin: 0.5em 0;
              }
            `}
          >
            <li>Yvann Alexandre</li>
            <li>Pauline Almeida | Danse-théâtre | Portugal</li>
            <li>Daina Ashbee</li>
            <li>Lillian Barbeito | Countertechnique</li>
            <li>Aïcha Bastien N’Diaye</li>
            <li>Eric Beauchesne</li>
            <li>Marie-Lorraine Bérubé | Feldenkrais</li>
            <li>Sarah Bild</li>
            <li>Peter Bingham | Contact Improvisation</li>
            <li>Marc Boivin</li>
            <li>Stéphanie Brochard</li>
            <li>Nicolas Cantin</li>
            <li>Ginelle Chagnon</li>
            <li>Maryse Damecour</li>
            <li>Antoine Defoort (causerie)</li>
            <li>Mélanie Demers</li>
            <li>Johanne Dor</li>
            <li>Olivier de Sagazan</li>
            <li>Ady Elzam</li>
            <li>Lisi Estaras | Ballet C de la B</li>
            <li>Frey Faust | Axis Syllabus</li>
            <li>Erin Flyn</li>
            <li>Marie Claire Forté</li>
            <li>Annie Gagnon (Mtl) | Gi gong</li>
            <li>Dana Gingras | gyro</li>
            <li>Frédérick Gravel</li>
            <li>Caroline Gravel | Conférence</li>
            <li>
              Jonathan Guillemette | Hip hop pour danseur·se·s contemporain·e·s
            </li>
            <li>Bruno Guillore | Hofesh Schechter Company</li>
            <li>Sara Hanley</li>
            <li>Steve Hamel</li>
            <li>Benjamin Hatcher</li>
            <li>Keith Hennessy</li>
            <li>Emmanuelle Huynh</li>
            <li>Louise Michel Jackson</li>
            <li>Peter Jasko | Les SlovaKs</li>
            <li>Emmanuel Jouthe | Danse Carpe Diem</li>
            <li>Kelly Keenan | Axis Syllabus</li>
            <li>Hanna Kiel</li>
            <li>Martin Kilvady | Les SlovaKs</li>
            <li>Tom Koch | Technique Alexander</li>
            <li>Hillel Kogan</li>
            <li>Alanna Kraaijeveld</li>
            <li>Benoît Lachambre</li>
            <li>Anton Lachky</li>
            <li>Sylvain Lafortune | Portés</li>
            <li>Alan Lake</li>
            <li>Louise Lecavalier</li>
            <li>Emmanuelle LePhan</li>
            <li>Liquid Loft | Vienne</li>
            <li>Jason Martin</li>
            <li>Katrina McPherson</li>
            <li>Baris Mihci | Axis Syllabus</li>
            <li>Mathilde Monnier</li>
            <li>Mikaël Xystra Montminy</li>
            <li>Line Nault</li>
            <li>Brice Noeser</li>
            <li>John Ottman</li>
            <li>Jocelyn Paradis</li>
            <li>Noa Paran (Batsheva dance company)</li>
            <li>Diego Pinon</li>
            <li>Anne Plamondon</li>
            <li>Dominique Porte</li>
            <li>Jacques Poulin-Denis | Grand Poney</li>
            <li>Linda Rabin</li>
            <li>David Rancourt</li>
            <li>Isabel Rocamora | vidéo danse</li>
            <li>RootlessRoot (Grèce)</li>
            <li>Manuel Roque</li>
            <li>Dorotea Saykaly | Marie Chouinard</li>
            <li>Diogo Sausa et Merel Lammers | Cie Hofesh Shechter</li>
            <li>Yael Schnell | Cie Sasha Waltz</li>
            <li>Elke Schrœder</li>
            <li>Ami Shulman</li>
            <li>Kirstie Simson</li>
            <li>Charles Slender-White | Countertechnique</li>
            <li>Matthew Smith</li>
            <li>Ted Stoffer | Belgique</li>
            <li>Heidi Strauss</li>
            <li>Lila-Mae Talbot</li>
            <li>Mariko Tanabe</li>
            <li>Laura Toma</li>
            <li>Tiffany Tregarthen</li>
            <li>Antoine Turmine – Gigue Contemporaine</li>
            <li>Ann Van den Broek | WArd/waRD</li>
            <li>James Viveiros – Technique GAGA</li>
            <li>Ahslea Watkin</li>
            <li>Sarah Wendt</li>
            <li>Wen Wei Wang</li>
            <li>Tom Weksler</li>
            <li>Nina Wollny | Countertechnique</li>
            <li>Jamie Wright</li>
            <li>David Zambrano | Flying Low</li>
            <li>605 Collective | Vancouver</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default ArchivesPage

export const query = graphql`
  query ArchivesPageQuery {
    events: allSanityEvent(filter: { slug: { current: { ne: null } } }) {
      edges {
        node {
          slug {
            current
          }
          title
          featuredImage {
            asset {
              gatsbyImageData(width: 480)
            }
            alt
            hotspot {
              x
              y
            }
          }
          date {
            ... on SanityDaily {
              to
            }
            ... on SanitySingleEvent {
              to
            }
            ... on SanityWeekly {
              to
            }
          }
        }
      }
    }
  }
`
