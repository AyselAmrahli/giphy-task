import React, { FC, ReactElement, ReactNode } from 'react';

import './index.scss';

type ContainerProps = {
  children: ReactNode | ReactElement;
}

const Container:FC<ContainerProps> = ({children}) => {
  return (
    <div className="app-container">
      {children}
    </div>
  );
}

export default React.memo(Container);
