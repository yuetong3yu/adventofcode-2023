import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = fileURLToPath(new URL('.', import.meta.url))

import { getSingleRange } from './utils.js'

let input = ''

fs.readFile(path.join(__dirname, './input.txt'), {}, (err, data) => {
  input += data.toString()
  const inputs = input.split('\n')

  const seedsRanges = inputs[0]
    .split(' ')
    .slice(1)
    .map((i) => +i)
  const map = {}
  for (let i = 2637529854; i < 2637529854 + 223394899; i++) {
    map[i] = 1
  }
  console.log(map)

  // const soil_mapper = inputs
  //   .slice(3, 9)
  //   .map((str) => str.split(' ').map((i) => +i))
  // const fertilizer_mapper = inputs
  //   .slice(11, 54)
  //   .map((str) => str.split(' ').map((i) => +i))
  // const water_mapper = inputs
  //   .slice(56, 95)
  //   .map((str) => str.split(' ').map((i) => +i))
  // const light_mapper = inputs
  //   .slice(97, 144)
  //   .map((str) => str.split(' ').map((i) => +i))
  // const temperature_mapper = inputs
  //   .slice(146, 173)
  //   .map((str) => str.split(' ').map((i) => +i))
  // const humidity_mapper = inputs
  //   .slice(175, 183)
  //   .map((str) => str.split(' ').map((i) => +i))
  // const location_mapper = inputs
  //   .slice(185, 201)
  //   .map((str) => str.split(' ').map((i) => +i))

  // const soil_ranges = soil_mapper.map(([a, b, c]) => getSingleRange(a, b, c))
  // const fertilizer_ranges = fertilizer_mapper.map(([a, b, c]) =>
  //   getSingleRange(a, b, c)
  // )
  // const water_ranges = water_mapper.map(([a, b, c]) => getSingleRange(a, b, c))
  // const light_ranges = light_mapper.map(([a, b, c]) => getSingleRange(a, b, c))
  // const temperature_ranges = temperature_mapper.map(([a, b, c]) =>
  //   getSingleRange(a, b, c)
  // )
  // const humidity_ranges = humidity_mapper.map(([a, b, c]) =>
  //   getSingleRange(a, b, c)
  // )
  // const location_ranges = location_mapper.map(([a, b, c]) =>
  //   getSingleRange(a, b, c)
  // )

  let res = Number.MAX_SAFE_INTEGER
  // for (let i = 0; i < seeds.length; i++) {
  //   let seed = seeds[i]
  //   for (let i = 0; i < soil_ranges.length; i++) {
  //     const [start, end, diff] = soil_ranges[i]
  //     if (seed >= start && seed <= end) {
  //       seed = seed - diff
  //       break
  //     }
  //   }
  //   for (let i = 0; i < fertilizer_ranges.length; i++) {
  //     const [start, end, diff] = fertilizer_ranges[i]
  //     if (seed >= start && seed <= end) {
  //       seed = seed - diff
  //       break
  //     }
  //   }
  //   for (let i = 0; i < water_ranges.length; i++) {
  //     const [start, end, diff] = water_ranges[i]
  //     if (seed >= start && seed <= end) {
  //       seed = seed - diff
  //       break
  //     }
  //   }
  //   for (let i = 0; i < light_ranges.length; i++) {
  //     const [start, end, diff] = light_ranges[i]
  //     if (seed >= start && seed <= end) {
  //       seed = seed - diff
  //       break
  //     }
  //   }
  //   for (let i = 0; i < temperature_ranges.length; i++) {
  //     const [start, end, diff] = temperature_ranges[i]
  //     if (seed >= start && seed <= end) {
  //       seed = seed - diff
  //       break
  //     }
  //   }
  //   for (let i = 0; i < humidity_ranges.length; i++) {
  //     const [start, end, diff] = humidity_ranges[i]
  //     if (seed >= start && seed <= end) {
  //       seed = seed - diff
  //       break
  //     }
  //   }
  //   for (let i = 0; i < location_ranges.length; i++) {
  //     const [start, end, diff] = location_ranges[i]
  //     if (seed >= start && seed <= end) {
  //       seed = seed - diff
  //       break
  //     }
  //   }
  //   if (seed < res) {
  //     res = seed
  //   }
  // }

  console.log(res)
})
