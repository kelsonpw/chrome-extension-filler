/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/core';

const wrapper = css({
  backgroundColor: 'palevioletred',
  minHeight: '400px',
  minWidth: '400px',
  padding: 0,
  margin: 0,
  fontFamily: 'Helvetica, Arial, sans-serif',
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
