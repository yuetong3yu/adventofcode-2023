export function pathsToMap(paths) {
  const res = {}

  for (let i = 0; i < paths.length; i++) {
    const path = paths[i]
    const [key, value] = path.split(' = ')
    const left_value = value.slice(1, 4)
    const right_value = value.slice(6, 9)

    res[key] = {
      left: left_value,
      right: right_value,
    }
  }

  return res
}

const DIRECTION_MAP = {
  L: 'left',
  R: 'right',
}

const START_KEY = 'AAA',
  END_KEY = 'ZZZ'

export function getStepsByMapAndInstructions(map, instructions) {
  let count = 0,
    current_key = START_KEY,
    idx = 0,
    record = ''
  while (current_key != END_KEY) {
    count++
    const direction = DIRECTION_MAP[instructions[idx]]
    record += instructions[idx]
    idx++
    if (idx == instructions.length) {
      idx = 0
    }
    current_key = map[current_key][direction]
  }

  return count
}
