import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = fileURLToPath(new URL('.', import.meta.url))

import { getStartPoint } from './utils.js'

let input = ''

fs.readFile(path.join(__dirname, './sample.txt'), {}, (err, data) => {
  input += data.toString()
  const strings = input.split('\n')

  const start_point = getStartPoint(strings)
  // the result can be either [] or undefined
  // go top
  const top_result = getResultFromStartPoint(strings, start_point, 'top')
  // go left
  const left_result = getResultFromStartPoint(strings, start_point, 'left')
  // go bottom
  const bottom_result = getResultFromStartPoint(strings, start_point, 'bottom')
  // go top
  const right_result = getResultFromStartPoint(strings, start_point, 'right')
  if (top_result) return top_result.length / 2
  if (left_result) return left_result.length / 2
  if (bottom_result) return bottom_result.length / 2
  if (right_result) return right_result.length / 2
})
