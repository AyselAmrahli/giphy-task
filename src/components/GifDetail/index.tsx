import React, { FC } from 'react';
import Text from '../Text';

import './index.scss';

type GifDetatilProps = {
  title: string;
  link: string;
  ageRestriction?: string | number;
}

const GifDetail:FC<GifDetatilProps> = ({title, link, ageRestriction}) => {
  return (
    <div className="gif-detail">
      <div>
        <Text content={title} />
        <Text content={link} />
      </div>
      <div className="gif-detail__rest">
        {ageRestriction}
      </div>
    </div>
  );
}

export default GifDetail;
