export default {
  title: "Activités",
  name: "event",
  type: "document",
  fieldsets: [
    {
      name: 'artist',
      title: 'Artiste'
    },
  ],
  fields: [
    {
      title: 'Type d\'activité',
      name: 'eventType',
      type: 'eventType'
    },
    {
      title: "Titre",
      name: "title",
      type: "string"
    },
    {
      title: "Description",
      name: "description",
      type: "richText"
    },
    {
      title: 'Public cible',
      name: 'targetAudience',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          {
            title: "Professionnel·le·s des arts de la danse et du mouvement",
            value: "professionnel",
          },
          {
            title: "Artistes des arts de la scène (théâtre, musique, perfomance, cinéma)",
            value: "sceneArtist",
          },
          {
            title: "Bougeur·se·s expérimenté·e·s (cirque, arts martiaux, danse, etc.)",
            value: "artist",
          },
          {
            title: "Grand public",
            value: "generalPublic",
          },
        ],
      }
    },
    {
      title: "Prix",
      name: "rate",
      type: 'array',
      of: [
        { type: 'regularRate' },
        { type: 'free' },
      ],
    },
    {
      title: "date",
      name: 'date',
      type: 'array',
      of: [
        {
          title: "Session unique",
          name: "singleEvent",
          type: "singleEvent",
        },
        {
          title: "Session quotidien",
          name: "daily",
          type: "daily",
        },
        {
          title: "session hebdomadaire",
          name: "weekly",
          type: "weekly",
        },
      ],
    },
    {
      title: "Lieu",
      name: 'venue',
      type: 'venue'
    },
    // prix
    {
      title: "Informations supplémentaires",
      name: "additionalInformation",
      type: "richText"
    },
    {
      title: "Lien inscription",
      name: "subscriptionLink",
      type: "string"
    },
    {
      title: "Artiste",
      name: "artist",
      type: "string",
      fieldset: 'artist',
    },
    {
      title: "Description",
      name: "artistDescription",
      type: "richText",
      fieldset: 'artist',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
      }
    },
  ]
}
