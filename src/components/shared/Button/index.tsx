import { FC, ReactNode } from 'react';

import './index.scss';

type ButtonProps =  {
	children: string | ReactNode;
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

export default Button