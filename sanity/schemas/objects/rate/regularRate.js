const getByTerm = (term) => {
  switch (term) {
    case 'day': return 'jour'
    case 'halfDay': return 'Demi-journée'
  }
}

export default {
  name: 'regularRate',
  title: 'Prix',
  type: 'object',
  fields: [
    {
      name: 'amount',
      title: 'Montant',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Par",
      name: "by",
      type: 'string',
      options: {
        list: [
          { title: 'Jour', value: 'day' },
          { title: 'Demi-journée', value: 'halfDay' },
        ]
      },
    },
    {
      name: 'member',
      title: 'Membre',
      type: "boolean"
    },
  ],
  preview: {
    select: {
      amount: 'amount',
      by: 'by',
      member: 'member',
    },
    prepare(selection) {
      const { amount, by, member } = selection

      return {
        title: `${amount}$/${getByTerm(by)}`,
        subtitle: member ? "Membre" : null
      }
    }
  }
}
