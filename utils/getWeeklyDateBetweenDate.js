import getDayInt from './getDayInt'

export default (from, to, day = []) => {
  const dates = []
  const currentDate = new Date(`${from}T00:00:00`)
  const toDate = new Date(`${to}T00:00:00`)

  const dayInt = day.map(d => getDayInt(d))

  while (currentDate <= toDate) {
    if (day.length < 1 || dayInt.includes(currentDate.getDay())) {
      dates.push(new Date(currentDate.toISOString()))
    }

    currentDate.setDate(currentDate.getDate() + 1)
  }

  return dates
}
