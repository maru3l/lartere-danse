import arrayListNumberItem from "../../../utils/arrayListNumberItem";

export default {
  title: "temps",
  name: "customTime",
  type: "object",
  fields: [
    {
      name: 'hour',
      title: 'Heure',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: arrayListNumberItem(24),
      },
    },
    {
      name: 'minute',
      title: 'Minute',
      type: 'string',
      options: {
        list: arrayListNumberItem(60, 15),
      },
    },
  ],
  preview: {
    select: {
      hour: 'hour',
      minute: 'minute',
    },
    prepare(selection) {
      const { hour, minute } = selection;
      return {
        title: `${hour}h${minute || ''}`,
      };
    },
  },
}
