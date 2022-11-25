import dayToString from "./dayToString"

// const groupSequences = array =>
//   array.reduce((acc, cur, idx, src) => {
//     if (acc.length < 1) {
//       return acc.push([cur])
//     }

//     const lastArray = acc[acc.length - 1]
//     const lastItem = lastArray.slice(-1)

//     if (cur - lastItem === 1) {
//       lastArray.push(cur)
//     } else {
//       return acc.push([cur])
//     }

//     return acc
//   }, [])

const isSequencial = (array) =>
  array.every(
    (num, index, src) => index === src.length - 1 || num < src[index + 1]
  )

const dayToConditionalString = (array) => {
  if (array.length === 1) {
    return dayToString(array[0])
  }

  if (array.length === 2) {
    return array.map((day) => dayToString(day)).join(" et ")
  }

  if (isSequencial(array)) {
    return [array.slice(0, 1)[0], array.slice(-1)[0]]
      .map((day) => dayToString(day))
      .join(" au ")
  }
}

export default dayToConditionalString
