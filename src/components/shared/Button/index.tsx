import { FC, ReactElement, ReactNode, memo } from 'react';

import './index.scss';

type ButtonProps =  {
	children: string | ReactNode | ReactElement;
	onClick: any;
  className?: string;
}

const Button: FC<ButtonProps> = ({children, onClick, className = '', ...props}) => {
  return (
    <button
      className={`app-button ${className}`} {...props}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default memo(Button)