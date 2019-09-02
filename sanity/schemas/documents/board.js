export default {
  title: "Conseil d'administration",
  name: "board",
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
