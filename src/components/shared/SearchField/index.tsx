import { FC, memo, ChangeEvent } from 'react';
import Button from '../Button';
import { ReactComponent as CancelIcon } from '../../../assets/images/icons/cancel.svg';

import './index.scss';

type SearchFieldProps = {
	placeholder?: string;
	defaultValue?: string;
	onChange: (value: string) => void;
  onFocus?: () => void;
}

const SearchField: FC<SearchFieldProps> = ({placeholder = '', defaultValue, onChange, onFocus}) => {
  return (
    <div className="app-search">
      <input
        type="text"
        value={defaultValue}
        placeholder={placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        onFocus={onFocus}
      />
      {defaultValue &&
      <Button className="reset-search" onClick={() => onChange('')}>
        <CancelIcon />
      </Button>}
    </div>
  )
}

export default memo(SearchField);