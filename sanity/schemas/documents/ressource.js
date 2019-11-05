export default {
  title: "Ressources",
  name: "ressource",
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
      title: "Type de ressource",
      name: "ressourceType",
      type: 'reference',
      to: [{ type: 'ressourceType' }]
    },
    {
      title: "Position [ordre]",
      name: "sort",
      type: "number",
      validation: Rule => Rule.integer()
    },
  ],
  orderings: [
    {
      title: 'Ordre déterminé',
      name: 'sortDesc',
      by: [
        { field: 'sort', direction: 'asc' }
      ]
    }
  ]
}
