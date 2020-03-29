import * as React from 'react';
import { useState } from 'react';
import { storiesOf } from '@storybook/react'

import Input from './'

storiesOf('Input', module)
  .add('basic input with label', () => {
    function Parent({ children, ...props }) {
      const [state, setState] = useState('');
      return <>{children(state, setState)}</>;
    }

    return (
      <Parent>
        {(state, setState) => (
          <Input
            label="Field"
            name="fieldName"
            value={state}
            handleChange={(_, value) => { setState(value)}}
          />
        )}
      </Parent>
    );
  });