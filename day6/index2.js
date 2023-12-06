import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = fileURLToPath(new URL('.', import.meta.url))

import { getWaysByTime } from './utils.js'

let input = ''

fs.readFile(path.join(__dirname, './input.txt'), {}, (err, data) => {
  input += data.toString()
  const strings = input.split('\n')
  const time = Number(
    strings[0]
      .split(':')[1]
      .split(' ')
      .filter((i) => !!i)
      .join('')
  )
  const distance = Number(
    strings[1]
      .split(':')[1]
      .split(' ')
      .filter((i) => !!i)
      .join('')
  )

  console.log(getWaysByTime(time, distance))
})
