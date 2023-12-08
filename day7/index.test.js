import { getRankByHand, sortHands } from './utils.js'

describe('getRankByHand', () => {
  test('five of a kind', () => {
    expect(getRankByHand('AAAAA')).toBe(7)
  })
  test('four of a kind', () => {
    expect(getRankByHand('AA8AA')).toBe(6)
  })
  test('full house', () => {
    expect(getRankByHand('AAA88')).toBe(5)
  })
  test('three of a kind', () => {
    expect(getRankByHand('AAA89')).toBe(4)
  })
  test('two pair', () => {
    expect(getRankByHand('AAK88')).toBe(3)
  })
  test('one pair', () => {
    expect(getRankByHand('AA875')).toBe(2)
  })
  test('high card', () => {
    expect(getRankByHand('AK875')).toBe(1)
  })
})

describe('sortHands', () => {
  test('1', () => {
    const data = ['32T3K', 'KK677']
    expect(sortHands(data)).toEqual(['32T3K', 'KK677'])
  })

  test('2', () => {
    const data = ['32T3K', 'KKKKK', 'KK677', 'AAAAA', 'KKK88', 'KKK77']
    expect(sortHands(data)).toEqual([
      '32T3K',
      'KK677',
      'KKK77',
      'KKK88',
      'KKKKK',
      'AAAAA',
    ])
  })
})
