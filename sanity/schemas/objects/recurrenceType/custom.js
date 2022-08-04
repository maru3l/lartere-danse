export default {
  title: "Session",
  name: "customEvent",
  type: "object",
  fields: [
    {
      title: "Date personnalisée",
      name: "customDate",
      type: "richText"
    },
  ],
  preview: {
    select: {
      customDate: 'customDate'
    },
    prepare(selection) {
      const block = (selection.customDate || []).find(block => block._type === 'block');

      return {
        title: block?.children
          .filter(child => child._type === 'span')
          .map(span => span.text)
          .join(''),
      }
    }
  }
}
