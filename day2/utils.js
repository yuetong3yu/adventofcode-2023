export function getRecordsArr(str) {
  const [_, recordString] = str.split(':')
  const arr = recordString.split(';').map((str) => {
    const res = [0, 0, 0]
    const _arr = str.split(',')
    _arr.forEach((ballString) => {
      let p = 0
      while (p < ballString.length) {
        const letter = ballString[p]
        if (letter === 'r') {
          let i = p - 2,
            num = ''
          while (ballString[i] !== ' ') {
            num = ballString[i] + num
            i--
          }
          res[0] += Number(num)
          break
        }
        if (letter === 'g') {
          let i = p - 2,
            num = ''
          while (ballString[i] !== ' ') {
            num = ballString[i] + num
            i--
          }
          res[1] += Number(num)
          break
        }
        if (letter === 'b') {
          let i = p - 2,
            num = ''
          while (ballString[i] !== ' ') {
            num = ballString[i] + num
            i--
          }
          res[2] += Number(num)
          break
        }
        p++
      }
    })

    return res
  })

  return arr
}
