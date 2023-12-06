export function getWaysByTime(time, record) {
  let count = 0
  let l = time >> 1,
    r = l + 1
  while (l >= 0 && r <= time) {
    const distance1 = (time - l) * l
    const distance2 = (time - r) * r
    if (distance1 > record || distance2 > record) {
      if (distance1 > record) count++
      if (distance2 > record) count++
      l--, r++
    } else {
      break
    }
  }

  return count
}

export function timesToDistance(time) {
  const res = []
  for (let i = 0; i <= time; i++) {
    const speed = i
    const remaining_time = time - i
    res[i] = speed * remaining_time
  }
  return res
}
