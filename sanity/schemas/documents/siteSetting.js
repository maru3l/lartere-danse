export default {
  title: 'Configuration',
  name: 'siteSetting',
  type: 'document',
  fields: [
    {
      title: "Formulaire d’adhésion",
      name: "membershipForm",
      type: "file",
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Titre'
        },
        {
          name: 'year',
          type: 'string',
          title: 'Année'
        }
      ]
    },
    {
      title: "Politique d’adhésion",
      name: "membershipPolicy",
      type: "file",
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Titre'
        }
      ]
    }
  ]
}
