export default {
  title: "Avantages",
  name: "benefit",
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
      title: "Type d'avantage",
      name: "benefitType",
      type: 'reference',
      to: [{ type: 'benefitType' }]
    },
    {
      title: 'Ordre',
      name: 'sortOrder',
      type: 'number'
    }
  ]
}
