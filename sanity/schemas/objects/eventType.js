export default {
  name: 'eventType',
  type: 'string',
  title: 'Types d\'activité',
  validation: Rule => Rule.required(),
  options: {
    list: [
      {
        title: "Stages intensifs",
        value: "intensiveCourses",
      },
      {
        title: "Classes de maître",
        value: "masterClasses",
      },
      {
        title: "Ateliers de création",
        value: "creativeWorkshops",
      },
      {
        title: "Sorties d’atelier de création",
        value: "creativeWorkshopFieldTrip",
      },
      {
        title: "Session d’improvisation de L’Artère (SIA)",
        value: "ImprovisationSession",
      },
      {
        title: "Lieux communs",
        value: "CommonPlaces",
      },
      {
        title: "Causerie / 5 à 7",
        value: "talk",
      },
    ],
  },
}
