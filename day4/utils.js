export function getPointsFromCardString(string) {
  const [_, dataString] = string.split(':')
  const [awardCardsString, onHandCardsString] = dataString
    .split('|')
    .map((i) => i.trim())
  const awardCards = awardCardsString.split(' ').filter((i) => !!i)
  const onHandCards = onHandCardsString.split(' ').filter((i) => !!i)

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
