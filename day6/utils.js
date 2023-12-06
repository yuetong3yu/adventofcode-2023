export function timesToDistance(time) {
  const res = []
  for (let i = 0; i <= time; i++) {
    const speed = i
    const remaining_time = time - i
    res[i] = speed * remaining_time
  }
  return res
}
