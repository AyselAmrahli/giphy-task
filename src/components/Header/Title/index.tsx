import React, { FC } from 'react';

import './index.scss';

type TitleProps =  {
  content: string;
}

const Title:FC<TitleProps> = ({content}) => <h3 className="app-header__title">{content}</h3>

export default React.memo(Title);
