/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/core';

const wrapper = css({
  backgroundColor: 'palevioletred',
  height: '400px',
  width: '400px',
});

const heading = css({
  fontSize: '40px',
  color: 'white',
});

const App: React.FC = () => {
  return (
    <div css={wrapper}>
      <h1 css={heading}>SUP SIR</h1>
    </div>
  );
};

export default App;
