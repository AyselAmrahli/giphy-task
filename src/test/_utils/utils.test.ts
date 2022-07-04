import { EContentRating } from '../../const/enum'
import getAgeRestriction from '../../utils'

// utils unit test example
describe('Utils test', () => {

  describe('Age Restriction', () => {
    test('should return 18+', () => {
      const rating = EContentRating.PG13
      expect(getAgeRestriction(rating)).toBe('18+')
    })
    test('should return All', () => {
      const rating = EContentRating.G
      expect(getAgeRestriction(rating)).toBe('All')
    })
  })

})
