import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = fileURLToPath(new URL('.', import.meta.url))

import { getNeighboursNumbers } from './utils.js'

let input = ''

fs.readFile(path.join(__dirname, './input.txt'), {}, (err, data) => {
  input += data.toString()
  const strings = input.split('\n')

  let res = 0
  for (let x = 0; x < strings.length; x++) {
    const str = strings[x]
    for (let y = 0; y < str.length; y++) {
      const char = str[y]
      if (char == '*') {
        const gear = getNeighboursNumbers(strings, x, y)
        res += gear
      }
    }
  }

  console.log(res)
})
