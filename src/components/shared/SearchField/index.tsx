import React, { FC } from 'react';
import Button from '../Button';
import { ReactComponent as CancelIcon } from '../../../assets/images/icons/cancel.svg';

import './index.scss';

interface IProps {
	placeholder?: string;
	defaultValue?: string;
	onChange: (value: string) => void;
  onFocus?: () => void;
}

const SearchField: FC<IProps> = ({placeholder = '', defaultValue, onChange, onFocus}) => {
  return (
    <div className="app-search">
      <input
        type="text"
        value={defaultValue}
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        onFocus={onFocus}
      />
      {defaultValue &&
      <Button className="reset-search" onClick={() => onChange('')}>
        <CancelIcon />
      </Button>}
    </div>
  )
}

export default React.memo(SearchField);