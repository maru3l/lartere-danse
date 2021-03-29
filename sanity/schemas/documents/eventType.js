export default {
  title: "Type d'activité",
  name: "eventType",
  type: "document",
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
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
      title: "Toujour visible",
      name: "alwaysOn",
      type: "boolean"
    },
    {
      title: 'Affichage',
      name: 'display',
      type: 'string',
      options: {
        list: [
          {
            title: "Liste",
            value: "list",
          },
          {
            title: "Grille",
            value: "grid",
          },
        ],
      }
    },
    {
      title: "Position [ordre]",
      name: "order",
      type: "number",
      validation: Rule => Rule.positive().integer()
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
  ]
}
