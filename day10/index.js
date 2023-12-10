import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = fileURLToPath(new URL('.', import.meta.url))

let input = ''

fs.readFile(path.join(__dirname, './sample.txt'), {}, (err, data) => {
  input += data.toString()
  const strings = input.split('\n')

  console.log(strings)
})
