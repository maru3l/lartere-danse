const now = new Date()

module.exports = (dates) => {
  const oldest = dates.reduce((acc, cur) => {
    const dateToEvaluateAcc = acc.to || acc.from
    const dateToEvaluateCur = cur.to || cur.from

    return Date.parse(dateToEvaluateAcc) > Date.parse(dateToEvaluateCur)
      ? acc
      : cur
  })

  return now.getTime() < Date.parse(oldest.to)
}
