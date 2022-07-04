import React, { FC } from 'react';

import './index.scss';

type GifProps = {
  src: string;
}

const Gif:FC<GifProps> = ({src}) => (
  <div className="gif">
    <img src={src} alt="giphy gif enjoy" />
  </div>
);

export default Gif;
