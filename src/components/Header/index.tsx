import React, { FC } from 'react';
import Back from './Back';

import './index.scss';
import Title from './Title';

type HeaderProps = {
  title: string;
}

const Header:FC<HeaderProps> = ({title}) => {

  return (
    <header className="app-header">
      <Back />
      <Title content={title} />
    </header>
  );
}

export default React.memo(Header);
