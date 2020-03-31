import * as React from 'react';
import { storiesOf } from '@storybook/react'

import iconStyles from 'components/Icon/styles.css';
import IconButton from './';

const { root, small, medium, large, ...rest } = iconStyles;

storiesOf('IconButton', module)
  .add('All icons', () => (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      { Object.keys(rest).map((iconName) => (
        <div style={{ 
          margin: '20px 10px', 
          textAlign: 'center', 
          width: '80px', 
          display: 'flex', 
          alignItems: 'center',
          flexDirection: 'column'
        }}> 
          <IconButton iconName={iconName} onClick={() => {}} />
          <p>{iconName}</p>
        </div>
      ))}
    </div>
  ));