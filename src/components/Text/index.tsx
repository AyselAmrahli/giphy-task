import { FC, memo } from 'react';

import './index.scss';

type TextProps = {
  content: string;
  dataTest?: string;
}

const Text:FC<TextProps>= ({content, dataTest}) => <p data-testid={dataTest} className="app-text">{content}</p>

export default memo(Text);
