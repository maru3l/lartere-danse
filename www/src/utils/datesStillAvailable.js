const now = new Date()

module.exports = dates => {
  const oldest = dates.reduce((acc, cur) =>
    Date.parse(acc.to) > Date.parse(cur.to) ? acc : cur
  )

  return now.getTime() < Date.parse(oldest.to)
}
