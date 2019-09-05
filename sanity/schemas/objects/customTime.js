export default {
  title: "temps",
  name: "customTime",
  type: "object",
  fields: [
    {
      title: "Heure",
      name: "hour",
      type: "number",
      validation: Rule => Rule.required().min(0).max(23).integer().positive()
    },
    {
      title: "Minute",
      name: "minute",
      type: "number",
      validation: Rule => Rule.min(0).max(59).integer().positive()
    }
  ]
}
