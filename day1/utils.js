export function getNumbersAtBothEnds(str) {
  const numberRegex = /^\d+$/
  let l = 0,
    r = str.length - 1
  while (!numberRegex.test(str[l]) && l < r) l++
  while (!numberRegex.test(str[r]) && l < r) r--

  const num = +`${str[l]}${str[r]}`

  return Number.isNaN(num) ? 0 : num
}
