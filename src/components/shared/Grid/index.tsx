import React, { FC, ReactElement, ReactNode } from 'react'

import './index.scss';

type GridProps =  {
  children: ReactNode | ReactElement;
}

const Grid:FC<GridProps> = ({children}) => {
  return (
    <div className="app-grid">
      {children}
    </div>
  );
}

export default Grid;
