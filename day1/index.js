const fs = require('fs')
const path = require('path')

let input = ''

fs.readFile(path.join(__dirname, './input.txt'), (err, data) => {
  input += data.toString()

  console.log(input)
})
