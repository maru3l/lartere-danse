// vendors
import React from "react"
import VisuallyHidden from "@reach/visually-hidden"
import css from "@emotion/css"
import { graphql } from "gatsby"

// components
import Layout from "../components/Layout"
import TextColumns from "../components/TextColumns/TextColumns"
import wrapper from "../utils/wrapper"
import PortableText from "../components/PortableText/PortableText"

const DevenirMembrePage = ({ data }) => {
  const honoraryMembers = (data.honoraryMembers.edges || []).map(
    ({ node }) => node
  )

  return (
    <Layout>
      <article
        css={css`
          ${wrapper.bolt()}
        `}
      >
        <section id="intro">
          <VisuallyHidden>
            <h1>Devenir Membre</h1>
          </VisuallyHidden>

          <p className="h2">
            Devenir membre de L’Artère, c’est démontrer votre appart&shy;enance
            à la communauté de la danse et du mouvement de Québec. Grâce à votre
            soutien, vous assurez la pérennité de l’organisme et contribuez à
            son épanouis&shy;sement.
          </p>

          <p className="h3 color-orange">
            De plus, en tant que membre, <br />
            de nombreux avantages vous sont offerts.
          </p>
        </section>

        <section id="inscrire">
          <h2
            css={css`
              margin-top: 0;
            `}
          >
            S'inscrire
          </h2>

          <p
            css={css`
              max-width: 720px;
            `}
          >
            Vous devez nous faire parvenir <br />
            par la poste, en main propre ou par courriel à{" "}
            <a href="mailto:inscriptions@larteredanse.ca">
              inscriptions@larteredanse.ca
            </a>{" "}
            :
          </p>

          <ul
            css={css`
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
              list-style: none;
              padding: 0;

              p {
                max-width: 420px;
              }
            `}
          >
            <li>
              <p>
                Votre <br />
                curriculum <br />
                vitae à jour
              </p>
            </li>

            <li>
              <p>
                <a href="/formulaire-dadhesion-et-renouvellement-19-20.pdf">
                  Le Formulaire adhesions et renouvellement
                </a>{" "}
                2018-2019 rempli
              </p>
            </li>

            <li>
              <p>
                Le montant de <br />
                la cotisation en <br />
                espèces ou <br />
                en chèque&nbsp;
                <sup>(au&nbsp;nom&nbsp;de&nbsp;L’Artère)</sup>
              </p>
            </li>
          </ul>

          <p
            className="color-orange"
            css={css`
              max-width: 710px;
            `}
          >
            Votre statut devient effectif uniquement lorsque toutes ces
            conditions sont remplies
          </p>
        </section>

        <TextColumns
          css={css`
            margin-top: ${180 / 30}em;
            h3 {
              margin-top: ${90 / 56}em;
              margin-bottom: 0.5rem;

              &.color-orange {
                margin-bottom: 0;
              }
            }

            section p:last-child {
              margin-bottom: 0;
            }
          `}
        >
          <section
            id="Criteres-dadmissibilite"
            className="prevent-column-break"
          >
            <h2>Critères d'admis&shy;sibilité</h2>

            <p>
              Chaque membre doit répondre à la définition et aux conditions
              d’admis&shy;sibilité de sa catégorie, ainsi que soumettre les
              pièces justificatives nécessaires. Toute demande d’adhésion peut
              être soumise à un comité de pairs possédant les connaissances
              appropriées pour en vérifier la conformité.
            </p>

            <p>
              La période d’adhésion à L’Artère commence au 1er septembre et
              prend fin au 31 août, même en cas d’adhésion tardive. Des frais de
              50 $ seront exigés pour le remplacement de chèques sans provision
              ou retournés par l’institution financière.
            </p>

            <h3 className="color-orange">Cas particuliers</h3>

            <p className="color-orange">
              Toute personne ne répondant pas à tous les critères de la{" "}
              <a href="/politique-d-adhésion-adoptee-2-avril-2018.pdf">
                Politique d’adhésion
              </a>{" "}
              de L’Artère, mais se considérant comme un professionnel de la
              danse, peut nous contacter par courriel à{" "}
              <a href="inscriptions@larteredanse.ca">
                inscriptions@larteredanse.ca
              </a>{" "}
              ou au 418-523-1777 poste 4.
            </p>
          </section>

          <section id="status-de-membres" className="prevent-column-break">
            <h2>Status de membres</h2>

            <h3
              css={css`
                margin-top: 0 !important;
              `}
            >
              Actif·ve
            </h3>

            <p>
              Tout·e artiste de la danse et du mouvement qui œuvre dans un
              contexte professionnel et qui est reconnu·e par ses pairs, dont la
              pratique de son art est son activité principale. Il·Elle est
              rémunéré·e pour ses activités et répond aux conditions
              d’admis&shy;sibilité prévues à l’article 1.2 du document de
              politique d’adhésion 18-19.
            </p>

            <h3>Associé·e</h3>

            <p>
              Toute personne morale ou physique qui a à cœur le
              dévelop&shy;pement de L’Artère sans toutefois être un·e artiste
              professionnel·le en danse et en mouvement, ou qui est en voie de
              le devenir.
            </p>

            <h3 className="color-orange">Important</h3>

            <p className="color-orange">
              Pour chacun des statuts, les conditions d’admis&shy;sibilité, les
              pièces justificatives à fournir ainsi que les privilèges sont
              spécifiés dans le document de{" "}
              <a href="/politique-d-adhésion-adoptee-2-avril-2018.pdf">
                politique d’adhésion 18-19
              </a>
              .
            </p>
          </section>
        </TextColumns>

        <section id="avantages">
          <h2>Avantages</h2>

          <div
            css={css`
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(220px, 580px));
              grid-column-gap: 1em;

              div p:first-child {
                margin-top: 0;
              }
            `}
          >
            <div>
              <p>
                Avantages d'entraînement pour tou·te·s les membres de L’Artère :
              </p>

              <p>
                Bénéficier des tarifs préférentiels des membres pour les classes
                et les stages de perfect&shy;ionnement de L’Artère.
              </p>

              <p>
                Développer votre réseau et échanger entre collègues lors de nos
                différentes activités.
              </p>
            </div>

            <div>
              <p className="color-orange">Ressources de santé :</p>

              <p>
                Bénéficier des soins de santé à la Clinique PCN à un coût
                moindre. Chaque membre en règle de L’Artère peut recevoir un
                traitement par un·e physiothérapeute avec un rabais de 5$ sur
                l’évaluation et les traitements suivants.
              </p>
            </div>
          </div>
        </section>

        <section id="membre-honoraire">
          <h2 className="h3">Membre honoraire. Honoré·e par L'Artère</h2>

          <p className="h2">
            Le·La membre honoraire est une personne physique, ou compagnie de
            danse, méritante annuellement ayant par son expertise ou son
            implication continue contribué de manière except&shy;ionnelle à
            l’enrichis&shy;sement et au dévelop&shy;pement de L’Artère et ses
            membres. Il·Elle est élu·e tous les deux ans et devient membre de
            L’Artère à vie. Il·Elle a les mêmes privilèges que les membres
            actif·ve·s.
          </p>
          {honoraryMembers.length > 0 && (
            <>
              <p className="h3">
                {honoraryMembers[0].name} ({honoraryMembers[0].year})
              </p>

              {honoraryMembers[0]._rawDescription && (
                <TextColumns
                  css={css`
                    line-height: 1.5em;
                  `}
                >
                  <PortableText blocks={honoraryMembers[0]._rawDescription} />
                </TextColumns>
              )}

              <h3 className="color-orange">Membres honorifiques</h3>

              <ul
                css={css`
                  list-style: none;
                  padding: 0;
                `}
              >
                {honoraryMembers.map(honoraryMember => (
                  <li
                    className="h2 color-orange"
                    css={css`
                      margin: 0;
                    `}
                  >
                    {honoraryMember.name} ({honoraryMember.year})
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>
      </article>
    </Layout>
  )
}

export default DevenirMembrePage

export const query = graphql`
  query {
    honoraryMembers: allSanityHonoraryMember(
      sort: { fields: year, order: DESC }
    ) {
      edges {
        node {
          _rawDescription
          name
          year
        }
      }
    }
  }
`
