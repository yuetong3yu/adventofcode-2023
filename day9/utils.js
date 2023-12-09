export function getNextValFromHistory(values) {
  if (values.every((n) => n == 0)) return 0

  const gaps = []
  for (let i = 1; i < values.length; i++) {
    gaps[i - 1] = values[i] - values[i - 1]
  }

  const recursion_result = getNextValFromHistory(gaps)
  return values[values.length - 1] + recursion_result
}
