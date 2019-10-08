export default {
  title: "Partenaires et collaborateurs",
  name: "partner",
  type: "document",
  fields: [
    {
      title: "Nom",
      name: "name",
      type: "string"
    },
    {
      title: "Description",
      name: "description",
      type: "richText"
    },
    {
      title: "Lien",
      name: "url",
      type: "url"
    },
    {
      title: "Position [ordre]",
      name: "order",
      type: "number",
      validation: Rule => Rule.positive().integer()
    },
  ],
  orderings: [
    {
      title: 'Ordre',
      name: 'popularityDesc',
      by: [
        { field: 'order', direction: 'asc' }
      ]
    }
  ]

}
