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
      title: "Catégorie",
      name: "type",
      type: "string",
      options: {
        list: [
          { title: 'Compagnies et collectifs de la Ville de Québec', value: 'localCompagniesAndCollectifs' },
          { title: 'Organismes spécialisés', value: 'organisation' },
          { title: 'Ressources autres', value: 'other' },
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      }
    },
  ]
}
