const Card_Ranks = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'T',
  'J',
  'Q',
  'K',
  'A',
]

export function getRankByHand(str) {
  const str_arr = str.split('')
  const map = {}
  for (let i = 0; i < str_arr.length; i++) {
    const char = str_arr[i]
    if (map[char] != null) {
      map[char]++
    } else {
      map[char] = 1
    }
  }

  const cards = Object.entries(map).sort(([_, a], [__, b]) => b - a)
  const highestRank = cards[0][1]

  if (highestRank === 5) {
    return 7
  }
  if (highestRank === 4) {
    return 6
  }
  if (highestRank === 3) {
    const secondary_rank = cards[1][1]
    if (secondary_rank === 2) return 5
    else return 4
  }
  if (highestRank === 2) {
    const secondary_rank = cards[1][1]
    if (secondary_rank === 2) return 3
    else return 2
  }
  if (highestRank === 1) return 1
}

export function sortHands(hands) {
  return hands.sort(_getSortByHands)

  function _getSortByHands(hand1, hand2) {
    const rank1 = getRankByHand(hand1)
    const rank2 = getRankByHand(hand2)

    if (rank1 !== rank2) {
      return rank1 - rank2
    } else {
      for (let i = 0; i < hand1.length; i++) {
        const char1 = hand1[i]
        const char2 = hand2[i]
        const idx1 = Card_Ranks.indexOf(char1)
        const idx2 = Card_Ranks.indexOf(char2)
        if (char1 !== char2) {
          return idx1 - idx2
        }
      }
    }
  }
}
