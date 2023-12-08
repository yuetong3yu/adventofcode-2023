import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = fileURLToPath(new URL('.', import.meta.url))

import { sortHands } from './utils.js'

let input = ''

fs.readFile(path.join(__dirname, './input.txt'), {}, (err, data) => {
  input += data.toString()
  const strings = input.split('\n')

  const cards = strings
    .map((i) => i.split(' '))
    .map((i) => {
      return [i[0], +i[1]]
    })
  const sorted_cards = sortHands(cards.map((i) => i[0]))

  let res = 0
  for (let i = 0; i < sorted_cards.length; i++) {
    const card = sorted_cards[i]
    const bid = cards.find(([hand]) => hand === card)[1]
    res += bid * (i + 1)
  }

  console.log(res)
})
