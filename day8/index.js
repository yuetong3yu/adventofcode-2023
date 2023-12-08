import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = fileURLToPath(new URL('.', import.meta.url))

import { pathsToMap, getStepsByMapAndInstructions } from './utils.js'

let input = ''

fs.readFile(path.join(__dirname, './input.txt'), {}, (err, data) => {
  input += data.toString()
  const strings = input.split('\n')

  const instructions = strings[0]
  const paths = strings.slice(2)
  console.log(getStepsByMapAndInstructions(pathsToMap(paths), instructions))
})
