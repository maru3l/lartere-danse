// vendors
import React from "react"
import VisuallyHidden from "@reach/visually-hidden"
import css from "@emotion/css"

// components
import Layout from "../components/Layout"
import TextColumns from "../components/TextColumns/TextColumns"
import wrapper from "../utils/wrapper"
import { graphql } from "gatsby"
import TeamGrid from "../components/TeamGrid/TeamGrid"
import { colors } from "../styles/variables"
import mediaQuery from "../utils/media-query"
import PortableText from "../components/PortableText/PortableText"

const AProposPage = ({ data }) => {
  const imgAboutIntro = data.imgAboutIntro.childImageSharp.fluid
  const imgAboutMandat = data.imgAboutMandat.childImageSharp.fluid
  const imgAboutHistory = data.imgAboutHistory.childImageSharp.fluid
  const teamMembers = data.teamMembers.edges.map(({ node }) => node)
  const boardMembers = data.boardMembers.edges.map(({ node }) => node)
  const partners = data.partners.edges.map(({ node }) => node)

  return (
    <Layout themeColor="ORANGE">
      <article
        css={css`
          ${wrapper.bolt()}
        `}
      >
        <VisuallyHidden>
          <h1>À propos</h1>
        </VisuallyHidden>

        <section id="vision">
          <h2 className="h3 color-black">Vision</h2>

          <p className="h2 color-black">
            L’Artère est un catalyseur de rencontres humaines et artistiques,
            donnant lieu à des expér&shy;imen&shy;ta&shy;tions et des
            réflexions, dans un but d’actua&shy;lisa&shy;tion perm&shy;anente de
            la discipline de l’art de la danse et du mouvement.
          </p>
        </section>

        <picture
          css={css`
            display: block;
            margin-top: ${200 / 55}em;
            margin-bottom: ${200 / 55}em;

            * {
              width: 100%;
            }
          `}
        >
          <source
            sizes={`(min-width: 1920px) 1800px, ${(1800 / 1920) * 100}vw`}
            srcSet={imgAboutIntro.srcSetWebp}
            type="image/webp"
          />

          <img
            sizes={`(min-width: 1920px) 1800px, ${(1800 / 1920) * 100}vw`}
            srcSet={imgAboutIntro.srcSet}
            src={imgAboutIntro.src}
            alt=""
          />
        </picture>

        <section id="mission">
          <h2 className="h3 color-black">Mission</h2>

          <p className="h2">
            Contribuer au dévelop&shy;pement et à la valorisation de l’art de la
            danse et du mouvement sur le territoire de la Capitale-Nationale et
            au-delà, en soutenant le perfect&shy;ionnement des artistes
            prof&shy;ess&shy;ionnel·le·s au quotidien.
          </p>
        </section>

        <section id="mandat" css={css``}>
          <h2 className="h3 color-black">Mandats</h2>

          <TextColumns
            className="h3 color-pink"
            css={css`
              p {
                break-inside: avoid; /* Chrome, Safari */
                page-break-inside: avoid; /* Theoretically FF 20+ */
                display: table; /* Actually FF 20+ */
              }
            `}
          >
            <p>
              Offrir, à Québec, une program&shy;mation de stages en art de la
              danse et du mouvement destinés aux artistes professionnel·le·s,
              répondant aux besoins actuels de la discipline;
            </p>

            <p>
              Contribuer à la rétention d’artistes professionnel·le·s en art de
              la danse et du mouvement sur le territoire de la
              Capitale-Nationale;
            </p>

            <p>
              Nourrir le foisonnement et la singularité des démarches
              artistiques en favorisant des espaces de réflexion;
            </p>

            <p>
              Favoriser les rencontres intergénérationnelles et
              interdisciplinaires entre les artistes d’ici et d’ailleurs;
            </p>

            <p>
              Contribuer à la démocratisation de la pratique de l’art de la
              danse et du mouvement;
            </p>

            <p>
              Viser le dévelop&shy;pement des artistes, collectifs et compagnies
              de la relève en étant gestionnaire de la mesure Première Ovation –
              Danse, en facilitant leur intégration au milieu professionnel par
              l’attribution de différentes bourses.
            </p>
          </TextColumns>

          <p className="h2 color-black">
            L’une des spécificités et singularité de la discipline de la danse
            réside dans la nécessité pour les praticien·ne·s de cet art de
            demeurer dans un constant perfect&shy;ionnement.
          </p>

          <TextColumns className="h3 color-black">
            <p className="prevent-column-break">
              Unique organisme de service consacré entièrement à cet objectif
              depuis 2003, L’Artère joue un rôle prédominant dans l’avancement
              de la danse contemporaine à Québec en offrant les activités de
              perfect&shy;ionnement aux artistes, indispensable au maintien
              d’une carrière en danse. Étant organisme résident à la Maison pour
              la danse, L’Artère contribue grandement à la vitalité de ce lieu
              par sa program&shy;mation d’envergure.
            </p>

            <p>
              La synergie créée par l’implantation des activités de ces deux
              organismes sous un même toit contribue vivement au renforcement de
              leurs missions respectives. Depuis janvier 2019, L’Artère a reçu
              le mandat du service de la culture de la Ville de Québec pour la
              gestion de la mesure Première Ovation — Danse, reconnaissant
              L’Artère comme entité essentielle à l’écosystème du milieu.
            </p>
          </TextColumns>

          <TextColumns className="h3 color-black">
            <p>
              La program&shy;mation de L’Artère est tissée soigneusement en
              fonction des besoins spécifiques du milieu afin d’assurer une
              offre de perfect&shy;ionnement continu sur le territoire. Elle est
              articulée dans l’intention de contribuer à la rétention des
              artistes sur le territoire, de nourrir et d’encourager l’émergence
              des démarches des créateur·rice·s, de contribuer au
              décloisonnement des pratiques et d’offrir une incursion singulière
              au grand public dans la pratique : conférences-performances,
              sorties d’atelier de création, classes ouvertes.
            </p>
          </TextColumns>

          <TextColumns className="h3 color-black">
            <p>
              Les activités de L’Artère sont réfléchies dans un souci de
              pérennité de la pratique, de partage de connaissances, d’autonomie
              dans la créativité et de valorisation de la diversité culturelle.
              L’une des lignes directrices de leur planification, autre que de
              maintenir l’artiste en danse dans un corps physique apte à
              entreprendre sa charge de travail quotidienne, est d’alimenter
              rigoureusement la fibre chercheuse chez l’artiste en danse et de
              créer un espace libre et ouvert pour nourrir les démarches des
              créateur·rice·s et encourager l’émergence de nouvelles. L’Artère
              mise sur la récurrence de techniques qui, en plus d’échauffer le
              corps, suscitent l’usage de la créativité, attirent des adeptes de
              mouvement de tout acabit et de toute provenance et créent ainsi un
              espace de réflexion collective foisonnant autour de la pratique en
              danse.
            </p>
          </TextColumns>
        </section>

        <picture
          css={css`
            display: block;
            margin-top: ${200 / 55}em;
            margin-bottom: ${200 / 55}em;

            * {
              width: 100%;
            }
          `}
        >
          <source
            sizes={`(min-width: 1920px) 1800px, ${(1800 / 1920) * 100}vw`}
            srcSet={imgAboutMandat.srcSetWebp}
            type="image/webp"
          />

          <img
            sizes={`(min-width: 1920px) 1800px, ${(1800 / 1920) * 100}vw`}
            srcSet={imgAboutMandat.srcSet}
            src={imgAboutMandat.src}
            alt=""
          />
        </picture>

        <section id="historiques">
          <h2 className="h3 color-black">Historiques</h2>

          <TextColumns className="h3 color-black">
            <p>
              En 2003, à l’initiative de Rosalie Trudel et Judith
              Lessard-Bérubé, un groupe de neuf diplômées de{" "}
              <a href="https://ledq.qc.ca/">L’École de danse de Québec</a> se
              sont mobilisées et ont mis sur pied L’Artère, coopérative de
              danseur·se·s professionnel·le·s de Québec. Son but était alors de
              répondre au besoin urgent de créer un espace de rassemblement pour
              la communauté professionnelle en danse contemporaine à Québec.
            </p>

            <p>
              Ainsi, le groupe a commencé à organiser des stages de danse
              contemporaine avec un désir d’ouverture et de dévelop&shy;pement
              pour la communauté. Cette program&shy;mation, toujours plus à la
              pointe de la pratique de la danse, a contribué et contribue encore
              à la rétention d’artistes de grand talent sur le territoire en
              favorisant une création et une production locale, ainsi que
              l’employabilité des artistes de ce secteur.
            </p>
          </TextColumns>

          <TextColumns className="h3 color-black">
            <p>
              Au fil des années, le milieu de l’art de la danse a pris de
              l’expansion et les structures existantes se sont ancrées
              fermement. De nouvelles compagnies se sont installées à Québec et
              le public s’est peu à peu manifesté. Depuis sa création, L’Artère
              fait partie intégrante de ce mouvement d’effervescence en jouant
              un rôle prédominant dans le dévelop&shy;pement de la danse à
              Québec.
            </p>

            <p>
              Notre organisme constitue désormais un pilier indispensable à
              l’équilibre de ce milieu.{" "}
              <a href="https://www.quebecdanse.org/a-propos/plan-directeur/">
                Le Plan directeur de la danse professionnelle au Québec
                2011-2021
              </a>{" "}
              et{" "}
              <a href="https://www.quebecdanse.org/wp-content/uploads/2018/11/danseqc_plan_dev_v16mars20121.pdf">
                le Plan de dévelop&shy;pement de la danse professionnelle à
                Québec
              </a>{" "}
              en soulignent d’ailleurs l’importance.
            </p>

            <p>
              Aujourd’hui, résidente permanente à la{" "}
              <a href="http://www.maisonpourladanse.ca/">
                Maison pour la danse
              </a>{" "}
              et responsable de la mesure{" "}
              <a href="https://premiereovation.com/">
                Première Ovation — Danse
              </a>
              , L’Artère continue d’affirmer et d’assumer son rôle de
              précurseur, en prenant entièrement en charge l’offre d’activités
              de perfect&shy;ionnement en art de la danse et du mouvement à
              Québec de façon organisée et professionnelle, mettant ainsi à
              profit toute l’expertise développée au fil des ans.
            </p>
          </TextColumns>

          <TextColumns className="h3">
            <p className="prevent-column-break">
              <u>
                Membres fondatrices de L’Artère, coopérative de danseurs
                professionnels de Québec :
              </u>{" "}
              Maryse Bonenfant, Céline Khandjian, Karine Ledoyen, Judith
              Lessard-Bérubé, Sonia Montminy, Karine Parisé, Mélanie Therrien,
              Rosalie Trudel et Arielle Warnke St-Pierre.
            </p>

            <p className="prevent-column-break">
              <u>
                Membres fondateur·rice·s de l’OBNL, L’Artère, dévelop&shy;pement
                et perfect&shy;ionnement en danse contemporaine :
              </u>{" "}
              Maryse Damecour, Anne-Pier Dion, Annie Gagnon, Isabelle Gagnon,
              Véronique Jalbert, Brice Noeser, Fabien Piché, Eve Rousseau-Cyr et
              Ariane Voineau.
            </p>
          </TextColumns>
        </section>

        <picture
          css={css`
            display: block;
            margin-top: ${200 / 55}em;
            margin-bottom: ${200 / 55}em;

            * {
              width: 100%;
            }
          `}
        >
          <source
            sizes={`(min-width: 1920px) 1800px, ${(1800 / 1920) * 100}vw`}
            srcSet={imgAboutHistory.srcSetWebp}
            type="image/webp"
          />

          <img
            sizes={`(min-width: 1920px) 1800px, ${(1800 / 1920) * 100}vw`}
            srcSet={imgAboutHistory.srcSet}
            src={imgAboutHistory.src}
            alt=""
          />
        </picture>

        <section id="organisation">
          <p
            className="h2 color-black"
            css={css`
              max-width: 1000px;
            `}
          >
            Un organisme dirigé par les artistes!
          </p>

          <TextColumns className="h3 color-black">
            <p>
              La force et la distinction de L’Artère sont tributaires du
              dévouement des artistes qui l’ont forgé : un organisme pour la
              communauté, par la communauté. La structure organisationnelle de
              L’Artère est réfléchie dans un esprit collaboratif et tissée
              soigneusement en résonance avec les besoins du milieu. Elle met à
              profit l’apport indispensable des artistes du milieu en les
              impliquant via des comités de travail (artistique, services aux
              membres, financement privé) ou en les employant pour différentes
              tâches (coordination Lieux communs et SIA — Performance), tout en
              étant encadrés par une coordination générale. De la sorte,
              L’Artère valorise et reconnaît les compétences de ses membres,
              contribue au partage d’expertises, favorise l’éclosion de
              nouvelles initiatives dans le milieu, participe au sentiment
              d’appart&shy;enance à une communauté et stimule l’engagement à son
              égard.
            </p>
          </TextColumns>
        </section>

        <section id="equipe">
          <h2 className="h3 color-black">L’équipe de L’Artère</h2>

          <TeamGrid
            members={teamMembers}
            css={css`
              color: ${colors.Jet};
            `}
          />
        </section>

        <section id="conseil">
          <h2 className="h3 color-black">Conseil d’administration</h2>

          <TeamGrid
            members={boardMembers}
            css={css`
              color: ${colors.Jet};
            `}
          />
        </section>

        <section id="partenaires-collaborateurs">
          <h2 className="h3 color-black">Partenaires & collaborateurs</h2>

          <p className="h2">
            La vitalité et le dynamisme de L’Artère se forgent à travers une
            vision de dévelop&shy;pement ancrée sur la maximisation et le
            renforcement de collabo&shy;rations sur le territoire et ailleurs.
            Grâce à l’apport de partenaires de choix développés et renforcés au
            fil des ans, elle déploie une program&shy;mation de grande qualité,
            dans un souci d’inclusion, de partage avec les autres disciplines
            artistiques et d’ouverture avec le grand public. Ainsi, L’Artère
            compte sur des collabo&shy;rations entretenues depuis plusieurs
            années avec des organismes homologues canadiens.
          </p>

          <ul
            css={css`
              list-style: none;
              margin: 0;
              padding: 0;

              columns: 1;
              margin-top: ${100 / 55}em;
              margin-bottom: ${200 / 55}em;

              ${mediaQuery.greaterThen(768)} {
                columns: 2;
              }

              ${mediaQuery.greaterThen(1024)} {
                columns: 3;
              }
            `}
          >
            {partners.map(partner => (
              <li
                css={css`
                  break-inside: avoid; /* Chrome, Safari */
                  page-break-inside: avoid; /* Theoretically FF 20+ */
                  display: table; /* Actually FF 20+ */
                  margin: 0 0 1.5em;

                  p:last-child {
                    margin-bottom: 0;
                  }
                `}
              >
                <p
                  css={css`
                    color: ${colors.Jet};
                    margin: 0 0 0.5em;
                  `}
                >
                  {partner.name}
                </p>

                {partner._rawDescription && (
                  <div
                    css={css`
                      margin-top: 0.5em;

                      p:first-child {
                        margin-top: 0;
                      }
                      p:last-child {
                        margin-bottom: 0;
                      }
                    `}
                  >
                    <PortableText blocks={partner._rawDescription} />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </Layout>
  )
}

export default AProposPage

export const query = graphql`
  query {
    imgAboutIntro: file(relativePath: { eq: "img-about-intro.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800, quality: 90) {
          src
          srcSet
          srcSetWebp
        }
      }
    }

    imgAboutMandat: file(relativePath: { eq: "img-about-mandat.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800, quality: 90) {
          src
          srcSet
          srcSetWebp
        }
      }
    }

    imgAboutHistory: file(relativePath: { eq: "img-about-history.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800, quality: 90) {
          src
          srcSet
          srcSetWebp
        }
      }
    }

    partners: allSanityPartner(sort: { fields: order, order: ASC }) {
      edges {
        node {
          _rawDescription
          name
        }
      }
    }

    boardMembers: allSanityBoard(sort: { fields: order, order: ASC }) {
      edges {
        node {
          name
          role
        }
      }
    }

    teamMembers: allSanityTeam(sort: { fields: order, order: ASC }) {
      edges {
        node {
          name
          role
          email
        }
      }
    }
  }
`
