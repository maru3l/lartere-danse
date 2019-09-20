export default (day) => {
  switch (day.toLowerCase()) {
    case "sunday":
    case "dimanche":
      return 0
    case "monday":
    case "lundi":
      return 1
    case "tuesday":
    case "mardi":
      return 2
    case "wednesday":
    case "mercredi":
      return 3
    case "thursday":
    case "jeudi":
      return 4
    case "friday":
    case "vendredi":
      return 5
    case "saturday":
    case "samedi":
      return 6
    default:
      return day
  }
}
