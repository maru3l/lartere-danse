export default {
  title: "Hebdomadaire",
  name: "weekly",
  type: "object",
  fieldsets: [
    { name: 'session', title: 'Session' }
  ],
  fields: [
    {
      title: "Début",
      name: 'from',
      type: "date"
    },
    {
      title: "Fin",
      name: 'to',
      type: "date"
    },
    {
      title: "De",
      name: 'fromTime',
      type: "customTime",
      fieldset: 'session'
    },
    {
      title: "Fin",
      name: 'toTime',
      type: "customTime",
      fieldset: 'session'
    },
    {
      title: "Jours",
      name: 'day',
      type: "array",
      of: [
        { type: 'string' }
      ],
      options: {
        list: [
          {
            title: "Dimanche",
            value: "sunday",
          },
          {
            title: "Lundi",
            value: "monday",
          },
          {
            title: "Mardi",
            value: "tuesday",
          },
          {
            title: "Mercredi",
            value: "wednesday",
          },
          {
            title: "Jeudi",
            value: "thuesday",
          },
          {
            title: "Vendredi",
            value: "friday",
          },
          {
            title: "Samedi",
            value: "saturday",
          },
        ]
      }
    }
  ]
}
