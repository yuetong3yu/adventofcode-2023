import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = fileURLToPath(new URL('.', import.meta.url))

import { getRecordsArr } from './utils.js'

let input = ''

fs.readFile(path.join(__dirname, './input.txt'), {}, (err, data) => {
  input += data.toString()
  const gamesRecord = input.split('\n')

  let res = 0
  for (let i = 0; i < gamesRecord.length; i++) {
    const game = gamesRecord[i]
    const countsArr = getRecordsArr(game)
    if (
      countsArr.every(([r, g, b]) => {
        return r <= 12 && g <= 13 && b <= 14
      })
    ) {
      res += i + 1
    }
  }

  console.log(res)
})
