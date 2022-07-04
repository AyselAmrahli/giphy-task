import React, { FC, ReactElement, ReactNode } from 'react';

import './index.scss';

type ButtonProps =  {
	children: string | ReactNode | ReactElement;
	onClick: any;
  className?: string;
}

const Button: FC<ButtonProps> = ({children, onClick, className = null}) => {
  console.log('render')
  return (
    <button
      className={`app-button ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default React.memo(Button)