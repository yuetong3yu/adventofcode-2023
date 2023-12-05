import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = fileURLToPath(new URL('.', import.meta.url))

import { numberRegex } from '../shared/index.js'
import { isNumberAdjacentToSymbol } from './utils.js'

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
        const [num1, num2] = getNeighboursNumbers(string, x, y)
        const gear = num1 * num2
      }
      res += gear
    }
  }

  console.log(res)
})
