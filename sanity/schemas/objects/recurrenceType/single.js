export default {
  title: "Session",
  name: "singleEvent",
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
  ]
}
