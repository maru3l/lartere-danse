import normalizeNumber from "../../../../utils/normalizeNumber";

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
  ],
  preview: {
    select: {
      from: 'from',
      to: 'to',
      fromTime: 'fromTime',
      toTime: 'toTime',
    },
    prepare(selection) {
      const { from, fromTime, toTime } = selection

      const fromDate = new Date(`${from}T${normalizeNumber(fromTime.hour)}:${normalizeNumber(toTime.minute)}:00-0400`);

      return {
        title: `${fromDate.toLocaleDateString('fr')}`,
      }
    }
  }
}
