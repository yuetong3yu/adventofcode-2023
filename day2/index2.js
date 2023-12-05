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
    const redArr = []
    const greenArr = []
    const blueArr = []
    for (let i = 0; i < countsArr.length; i++) {
      redArr.push(countsArr[i][0])
      greenArr.push(countsArr[i][1])
      blueArr.push(countsArr[i][2])
    }
    const redMax = Math.max(...redArr)
    const greenMax = Math.max(...greenArr)
    const blueMax = Math.max(...blueArr)
    console.log()
    res += redMax * greenMax * blueMax
  }

  console.log(res)
})
