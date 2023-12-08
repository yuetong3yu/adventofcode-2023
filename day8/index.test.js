import { pathsToMap, getStepsByMapAndInstructions } from './utils.js'
const mock_data_1 = ['AAA = (BBB, BBB)', 'BBB = (AAA, ZZZ)', 'ZZZ = (ZZZ, ZZZ)']

const mock_data_2 = [
  'AAA = (BBB, CCC)',
  'BBB = (DDD, EEE)',
  'CCC = (ZZZ, GGG)',
  'DDD = (DDD, DDD)',
  'EEE = (EEE, EEE)',
  'GGG = (GGG, GGG)',
  'ZZZ = (ZZZ, ZZZ)',
]

describe('pathsToMap', () => {
  test('generate map relationship', () => {
    expect(pathsToMap(mock_data_1)).toEqual({
      AAA: {
        left: 'BBB',
        right: 'BBB',
      },
      BBB: {
        left: 'AAA',
        right: 'ZZZ',
      },
      ZZZ: {
        left: 'ZZZ',
        right: 'ZZZ',
      },
    })
  })

  test('generate map relationship with more complicated data', () => {
    expect(pathsToMap(mock_data_2)).toEqual({
      AAA: {
        left: 'BBB',
        right: 'CCC',
      },
      BBB: {
        left: 'DDD',
        right: 'EEE',
      },
      CCC: {
        left: 'ZZZ',
        right: 'GGG',
      },
      DDD: {
        left: 'DDD',
        right: 'DDD',
      },
      EEE: {
        left: 'EEE',
        right: 'EEE',
      },
      GGG: {
        left: 'GGG',
        right: 'GGG',
      },
      ZZZ: {
        left: 'ZZZ',
        right: 'ZZZ',
      },
    })
  })
})

describe('getStepsByMapAndInstructions', () => {
  test('answer for first sample', () => {
    expect(getStepsByMapAndInstructions(pathsToMap(mock_data_1), 'LLR')).toBe(6)
  })

  test('answer for second sample', () => {
    expect(getStepsByMapAndInstructions(pathsToMap(mock_data_2), 'RL')).toBe(2)
  })
})
