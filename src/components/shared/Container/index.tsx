import { FC, ReactElement, ReactNode, memo } from 'react';

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

export default memo(Container);
