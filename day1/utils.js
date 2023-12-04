const ONE = 'one',
  TWO = 'two',
  THREE = 'three',
  FOUR = 'four',
  FIVE = 'five',
  SIX = 'six',
  SEVEN = 'seven',
  EIGHT = 'eight',
  NINE = 'nine'
const LETTERS_ARR = [ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE]
const LETTERS_MAP = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
}
const numberRegex = /^\d+$/

export function getNumbersAtBothEnds(str) {
  const leftNumber = _getLeftestNumber(str)
  const rightNumber = _getRightestNumber(str)

  console.log(leftNumber, rightNumber)

  const num = +`${leftNumber}${rightNumber}`
  return Number.isNaN(num) ? 0 : num
}

function _getLeftestNumber(str) {
  const letters = []
  LETTERS_ARR.forEach((LETTER) => {
    if (str.includes(LETTER)) letters.push([str.indexOf(LETTER), LETTER])
  })
  letters.sort(([_i1], [_i2]) => _i1 - _i2)
  const firstDigitIndex = _getFirstDigitIndex(str)
  if (!letters.length) return str[firstDigitIndex]
  if (firstDigitIndex === -1) return LETTERS_MAP[letters[0][1]]
  return firstDigitIndex < letters[0][0]
    ? str[firstDigitIndex]
    : LETTERS_MAP[letters[0][1]]
}

function _getRightestNumber(str) {
  const letters = []
  LETTERS_ARR.forEach((LETTER) => {
    if (str.includes(LETTER)) letters.push([str.lastIndexOf(LETTER), LETTER])
  })
  letters.sort(([_i1], [_i2]) => _i2 - _i1)
  const lastDigitIndex = _getLastDigitIndex(str)
  if (!letters.length) return str[lastDigitIndex]
  if (lastDigitIndex === -1) return LETTERS_MAP[letters[0][1]]
  return lastDigitIndex > letters[0][0]
    ? str[lastDigitIndex]
    : LETTERS_MAP[letters[0][1]]
}

function _getFirstDigitIndex(str) {
  for (let i = 0; i < str.length; i++) {
    if (numberRegex.test(str[i])) return i
  }
  return -1
}

function _getLastDigitIndex(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    if (numberRegex.test(str[i])) return i
  }
  return -1
}
