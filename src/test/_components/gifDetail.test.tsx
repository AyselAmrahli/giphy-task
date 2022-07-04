import { render } from '@testing-library/react';
import GifDetail from '../../components/GifDetail';
import getAgeRestriction from '../../utils';

// component test example
describe('GifDetail component', () => {
  let mockData: any;
  beforeEach(() => {
    mockData = {
      title: 'GIF test title',
      bitly_url: "http://gph.is/2ywwsDk",
      images: [],
      id: '26Ff2pYgkVT0rIuNq',
      type: 'gif',
      rating: 'pg-13',
      username: 'giftest'
    };
  });

  test('renders gif detail component via given data', async () => {
    const { getByTestId } = render(
      <GifDetail title={mockData.title} ageRestriction={getAgeRestriction(mockData.rating)} link={mockData.bitly_url} />
    );

    const detailWrapper = getByTestId('app-gif-detail-wrapper');
    const title = getByTestId(`app-text-${mockData.title}`);

    expect(detailWrapper).toHaveClass('gif-detail');
    expect(detailWrapper).toContainElement(title);
    expect(title).toHaveTextContent(mockData.title);
  });
});