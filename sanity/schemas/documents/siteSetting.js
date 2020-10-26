export default {
  title: 'Configuration',
  name: 'siteSetting',
  type: 'document',
  fields: [
    {
      title: "Politique d’adhésion",
      name: "membershipPolicy",
      type: "fileObject",
    },
    {
      title: "Lien vers Formulaire d’adhésion",
      name: "membershipFormUrl",
      type: "url"
    }
  ]
}
