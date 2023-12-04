import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { getNumbersAtBothEnds } from './utils.js'
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
