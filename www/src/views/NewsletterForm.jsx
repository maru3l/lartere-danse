// vendors
import React from "react"
import { css } from "@emotion/core"
import Button from "../components/Button"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { Formik, Form, Field, ErrorMessage } from "formik"

const NewsletterForm = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
      `}
    >
      <p
        css={css`
          font-size: ${96 / 33}em;
          flex-basis: 50%;
          flex-grow: 1;
          margin: 0;
        `}
      >
        Oui, j’aimerais <br />
        m’abonner <br />à l’infolettre <br />
        de L’Artère.
      </p>

      <Formik
        initialValues={{ email: "" }}
        validate={values => {
          let errors = {}
          if (!values.email) {
            errors.email = "Adresse courriel invalide"
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Adresse courriel invalide"
          }
          return errors
        }}
        onSubmit={(values, actions) => {
          addToMailchimp(values.email)
            .then(data => {
              actions.setSubmitting(false)
              actions.setStatus(data)
            })
            .catch(() => {
              actions.setSubmitting(false)
              actions.setStatus({
                result: "error",
                msg: "Un problème est survenu, veuillez réessayer plus tard.",
              })
            })
        }}
      >
        {({ isSubmitting, status }) => (
          <Form
            css={css`
              flex-basis: 0;
              flex-grow: 999;
              min-width: 50%;
            `}
          >
            <label htmlFor="email">
              <Field
                type="email"
                name="email"
                id="email"
                css={css`
                  width: 100%;
                  line-height: 50px;
                  font-size: ${36 / 33}em;
                `}
              />

              <span
                css={css`
                  display: block;
                  font-size: ${24 / 33}em;
                  margin-bottom: 1em;
                `}
              >
                votre courriel
              </span>
            </label>

            {/* <ErrorMessage name="email" /> */}

            {status && <p>{status.msg}</p>}

            {!(status && status.result === "succes") && (
              <div>
                <Button
                  type="submit"
                  css={css`
                    text-transform: uppercase;
                  `}
                  disable={isSubmitting}
                >
                  S'abonner
                </Button>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default NewsletterForm
