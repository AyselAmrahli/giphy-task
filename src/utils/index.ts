import { EContentRating } from "../const/enum";

const getAgeRestriction = (rating: EContentRating) => {
  switch (rating) {
    case EContentRating.G:
      return 'All'
    case EContentRating.PG:
      return '13+'
    case EContentRating.PG13:
      return '18+'
    case EContentRating.R:
      return '18+'
    default:
      return 'All';
  }
}

export default getAgeRestriction;