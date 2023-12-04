import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = fileURLToPath(new URL('.', import.meta.url))

import { getPointsFromCardString } from './utils.js'

let input = ''

fs.readFile(path.join(__dirname, './input.txt'), {}, (err, data) => {
  input += data.toString()
  const cardsRecord = input.split('\n')

  let res = 0
  for (let i = 0; i < cardsRecord.length; i++) {
    const card = cardsRecord[i]
    const points = getPointsFromCardString(card)
    res += points
  }

  console.log(res)
})
