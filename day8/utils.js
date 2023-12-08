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

export function getStepsByMapAndInstructions(map, instructions) {
  const keys = Object.keys(map)
  const destination_key = keys[keys.length - 1]
  const start_key = keys[0]

  let count = 0,
    current_key = start_key,
    idx = 0
  while (current_key != destination_key) {
    count++
    const direction = DIRECTION_MAP[instructions[idx++]]
    if (idx == instructions.length - 1) idx = 0
    current_key = map[current_key][direction]
    console.log(direction, current_key)
  }

  return count
}
