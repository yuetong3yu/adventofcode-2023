import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = fileURLToPath(new URL('.', import.meta.url))

import { getNextValFromHistory } from './utils.js'

let input = ''

fs.readFile(path.join(__dirname, './input.txt'), {}, (err, data) => {
  input += data.toString()
  const strings = input.split('\n')

  const values = strings.map((i) => i.split(' ').map((_i) => +_i))
  let res = 0
  for (let i = 0; i < values.length; i++) {
    res += getNextValFromHistory(values[i])
  }

  console.log(res)
})
