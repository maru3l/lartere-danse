export default {
  title: "Type d'activité",
  name: "eventType",
  type: "document",
  fields: [
    {
      title: "Nom",
      name: "name",
      type: "string"
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'name',
      }
    },
    {
      title: "Position [ordre]",
      name: "order",
      type: "number",
      validation: Rule => Rule.positive().integer()
    },
  ]
}
