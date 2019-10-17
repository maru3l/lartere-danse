export default {
  title: "Types de ressource",
  name: "ressourceType",
  type: "document",
  fields: [
    {
      title: "Nom",
      name: "name",
      type: "string"
    },
    {
      title: 'Ordre',
      name: 'sortOrder',
      type: 'number'
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
