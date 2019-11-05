export default {
  title: "Équipe",
  name: "team",
  type: "document",
  fields: [
    {
      title: "Nom",
      name: "name",
      type: "string"
    },
    {
      title: "Rôle",
      name: "role",
      type: "string"
    },
    {
      title: "Courriels",
      name: "email",
      type: "array",
      of: [{ type: 'string' }]
    },
    {
      title: "Portrait",
      name: "portrait",
      type: "mainImage"
    },
    {
      title: "Position [ordre]",
      name: "order",
      type: "number",
      validation: Rule => Rule.positive().integer()
    },
  ]
}
