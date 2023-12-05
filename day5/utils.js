export function getSingleRange(sec1_start, sec2_start, length) {
  const diff = sec2_start - sec1_start
  const ranges = [sec2_start, sec2_start + length - 1, diff]
  return ranges
}
