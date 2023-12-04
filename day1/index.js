import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = fileURLToPath(new URL('.', import.meta.url))

let input = ''

fs.readFile(path.join(__dirname, './input.txt'), {}, (err, data) => {
  input += data.toString()
  const datas = input.split('\n')

  let sum = 0
  for (let i = 0; i < datas.length; i++) {
    const num = getNumbersAtBothEnds(datas[i])
    sum += num
  }
  console.log(sum)
})

export function getNumbersAtBothEnds(str) {
  const numberRegex = /^\d+$/
  let l = 0,
    r = str.length - 1
  while (!numberRegex.test(str[l]) && l < r) l++
  while (!numberRegex.test(str[r]) && l < r) r--

  const num = +`${str[l]}${str[r]}`

  return Number.isNaN(num) ? 0 : num
}
