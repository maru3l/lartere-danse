import normalizeNumber from "../../../../utils/normalizeNumber";

const dayOfTheWeekById = (id) => {
  switch (id) {
    case "0": return "Dimanche";
    case "1": return "Lundi";
    case "2": return "Mardi";
    case "3": return "Mercredi";
    case "4": return "Jeudi";
    case "5": return "Vendredi";
    case "6": return "Samedi";
  }
}

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
            value: "0",
          },
          {
            title: "Lundi",
            value: "1",
          },
          {
            title: "Mardi",
            value: "2",
          },
          {
            title: "Mercredi",
            value: "3",
          },
          {
            title: "Jeudi",
            value: "4",
          },
          {
            title: "Vendredi",
            value: "5",
          },
          {
            title: "Samedi",
            value: "6",
          },
        ]
      }
    }
  ],
  preview: {
    select: {
      from: 'from',
      to: 'to',
      fromTime: 'fromTime',
      toTime: 'toTime',
      days: 'day',
    },
    prepare(selection) {
      const { from, to, fromTime, toTime, days } = selection

      const fromDate = new Date(`${from}T${normalizeNumber(fromTime.hour)}:${normalizeNumber(toTime.minute)}:00-0400`);
      const toDate = new Date(`${to}T${normalizeNumber(toTime.hour)}:${normalizeNumber(toTime.minute)}:00-0400`);

      return {
        title: `${fromDate.toLocaleDateString('fr')} au ${toDate.toLocaleDateString('fr')}`,
        subtitle: `Le ${days.map(day => dayOfTheWeekById(day)).join(', ')}`
      }
    }
  }
}
