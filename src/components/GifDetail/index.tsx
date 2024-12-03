import { FC } from 'react';
import Text from '../Text';

import './index.scss';

type GifDetatilProps = {
  title: string;
  link: string;
  ageRestriction?: string | number;
}

const GifDetail:FC<GifDetatilProps> = ({title, link, ageRestriction}) => {
  return (
    <div data-testid="app-gif-detail-wrapper" className="gif-detail">
      <div>
        <Text dataTest={`app-text-${title}`} content={title} />
        <Text dataTest={`app-text-${link}`} content={link} />
      </div>
      <div data-testid="app-age-rest" className="gif-detail__rest">
        {ageRestriction}
      </div>
    </div>
  );
}

export default GifDetail;
