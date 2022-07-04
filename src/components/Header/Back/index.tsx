import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import {ReactComponent as LeftIcon} from '../../../assets/images/icons/left.svg';
import Button from '../../shared/Button';

import './index.scss';

const Back:FC = () => {
  let navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate(-1)}
      className="app-header-back__btn"
    >
      <LeftIcon />
    </Button>
  );
}

export default React.memo(Back);
