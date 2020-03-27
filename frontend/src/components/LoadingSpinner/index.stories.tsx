import * as React from 'react';
import { storiesOf } from '@storybook/react'

import LoadingSpinner from './'

storiesOf('LoadingSpinner', module)
  .add('All examples', () => {
    return (
      <div>
        <div style={{ margin: 10 }}> 
          <p>Large:</p>
          <LoadingSpinner size="large" />
        </div>
        <div style={{ margin: 10 }}> 
          <p>Medium:</p>
          <LoadingSpinner size="medium" />
        </div>
        <div style={{ margin: 10 }}> 
          <p>Small:</p>
          <LoadingSpinner size="small" />
        </div>
        <div style={{ margin: 10 }}> 
          <p>Large, monocolor:</p>
          <LoadingSpinner size="large" monocolor />
        </div>
        <div style={{ margin: 10 }}> 
          <p>Medium, monocolor:</p>
          <LoadingSpinner size="medium" monocolor />
        </div>
        <div style={{ margin: 10 }}> 
          <p>Small, monocolor:</p>
          <LoadingSpinner size="small" monocolor />
        </div>
      </div>
    );
  });