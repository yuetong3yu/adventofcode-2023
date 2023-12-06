import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = fileURLToPath(new URL('.', import.meta.url))

import { timesToDistance } from './utils.js'

let input = ''

fs.readFile(path.join(__dirname, './input.txt'), {}, (err, data) => {
  input += data.toString()
  const strings = input.split('\n')

  const times = strings[0]
    .split(':')[1]
    .split(' ')
    .filter((i) => !!i)
    .map((i) => +i)
  const distance = strings[1]
    .split(':')[1]
    .split(' ')
    .filter((i) => !!i)
    .map((i) => +i)

  const res = []
  for (let i = 0; i < times.length; i++) {
    const time = times[i]
    const _distance = distance[i]
    const timeDistances = timesToDistance(time)
    console.log(timeDistances)
    res.push(
      timeDistances.reduce((prev, cur) => {
        if (cur > _distance) return prev + 1
        return prev
      }, 0)
    )
  }

  console.log(res.reduce((prev, cur) => prev * cur, 1))
})
