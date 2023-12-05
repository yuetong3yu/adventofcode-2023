import { numberRegex } from '../shared/index.js'

export function getPointsFromCardString(string) {
  const [_, awardCards, onHandCards] = seperateCardsFromString(string)

  let res = 0,
    points = 0
  for (let i = 0; i < onHandCards.length; i++) {
    const card = onHandCards[i]
    if (awardCards.includes(card)) {
      if (points === 0) {
        points = 1
      } else {
        points = 2 * points
      }
    }
  }
  res += points
  return res
}

export function getScratchcards(cardsStringArr) {
  let cardsEntries = cardsStringArr
    .map((cardString) => {
      return seperateCardsFromString(cardString)
    })
    .map((i) => {
      return [Number(i[0]), i[1], i[2]]
    })

  const container = new Array(cardsEntries.length).fill(1)

  while (cardsEntries.length) {
    const [cardNumber, awardCards, onHandCards] = cardsEntries.shift()
    let matchesNum = _getMatchesFromAwards(awardCards, onHandCards)
    while (matchesNum > 0) {
      container[cardNumber - 1 + matchesNum] += container[cardNumber - 1]
      matchesNum--
    }
  }

  const res = container.reduce((prev, cur) => prev + cur, 0)
  return res
}

export function seperateCardsFromString(str) {
  const [cardNumberString, dataString] = str.split(':')
  const [awardCardsString, onHandCardsString] = dataString
    .split('|')
    .map((i) => i.trim())
  const cardNumber = cardNumberString.split('').reduce((prev, cur) => {
    if (numberRegex.test(cur)) prev = prev + cur
    return prev
  }, '')
  const awardCards = awardCardsString.split(' ').filter((i) => !!i)
  const onHandCards = onHandCardsString.split(' ').filter((i) => !!i)

  return [cardNumber, awardCards, onHandCards]
}

function _getMatchesFromAwards(awardCards, onHandCards) {
  let matches = 0
  for (let i = 0; i < onHandCards.length; i++) {
    const card = onHandCards[i]
    if (awardCards.includes(card)) matches++
  }
  return matches
}
