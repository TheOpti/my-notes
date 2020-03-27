import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './';

const btnWrapperStyle = {
  margin: '20px',
};

storiesOf('Button', module)
  .add('all buttons', (): any => (
    <>
      <div style={btnWrapperStyle}>
        <Button label="Raised button" color="raised" />
      </div>
      <div style={btnWrapperStyle}>
        <Button label="Outlined button" color="outlined" />
      </div>
      <div style={btnWrapperStyle}>
        <Button label="Raised with loading button" loading color="raised" />
      </div>
      <div style={btnWrapperStyle}>
        <Button label="Outlined with loading button" loading color="outlined" />
      </div>
      <div style={btnWrapperStyle}>
        <Button label="Disabled raised button" disabled color="raised" />
      </div>
      <div style={btnWrapperStyle}>
        <Button label="Disabled outlined button" disabled color="outlined" />
      </div>
    </>
  ))
  .add('with text', () => (
    <Button label="This is sample button" />
  ));