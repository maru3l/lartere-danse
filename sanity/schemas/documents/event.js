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
      title: 'Type d\'activité',
      name: 'eventType',
      type: 'reference',
      to: [{ type: 'eventType'}]
    },
    {
      title: 'Public cible',
      name: 'targetAudience',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          {
            title: "Professionnel·le·s de l’art de la danse et du mouvement",
            value: "professionnel",
          },
          {
            title: "Bougeur·se·s expérimenté·e·s et artistes des arts de la scène (cirque • arts martiaux • théâtre • musique • etc.)",
            value: "artist",
          },
          {
            title: "Tout public",
            value: "generalPublic",
          },
        ],
      }
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
      title: "Informations supplémentaires",
      name: "additionalInformation",
      type: "richText"
    },
    {
      title: "Inscription",
      name: 'registration',
      type: 'array',
      of: [
        { type: 'registrationLink' },
        { type: 'registrationEmail' },
      ],
    },
    {
      title: 'Image à la une',
      name: 'featuredImage',
      type: 'mainImage'
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
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo-tools',
      options: {
        baseUrl: 'https://www.larteredanse.ca/archives/',
        slug: (doc) => doc.slug.current,
        content: (doc) => doc.description,
        title: (doc) => doc.title,
      }
    }
  ]
}
