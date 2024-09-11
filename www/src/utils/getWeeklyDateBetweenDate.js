import getDayInt from "./getDayInt"

export default (from, to, day = []) => {
  const dates = []
  const [fromYear, fromMonth, fromDate] = from.split("-")
  const [toYear, toMonth, toDate] = (to ?? from).split("-")
  const currentDate = new Date(fromYear, fromMonth - 1, fromDate)
  const toDateObj = new Date(toYear, toMonth - 1, toDate)

  const dayInt = day.map((d) => getDayInt(d))

  while (currentDate <= toDateObj) {
    if (day.length < 1 || dayInt.includes(currentDate.getDay())) {
      dates.push(new Date(currentDate.toISOString()))
    }

    currentDate.setDate(currentDate.getDate() + 1)
  }

  return dates
}
