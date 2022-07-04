import { FC, memo } from 'react';

import './index.scss';

type TextProps = {
  content: string;
}

const Text:FC<TextProps>= ({content}) => <p className="app-text">{content}</p>

export default memo(Text);
