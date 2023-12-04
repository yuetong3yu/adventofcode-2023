const fs = require('fs')
const path = require('path')

let input = ''

fs.readFile(path.join(__dirname, './input.txt'), (err, data) => {
  input += data.toString()
  const datas = input.split('\n')
})

export function getNumbersAtBothEnds(str) {
  const numberRegex = /^\d+$/
  let l = 0,
    r = str.length - 1
}
