export default {
  title: "Types Avantage",
  name: "benefitType",
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
