import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './';

storiesOf('Button', module)
  .add('with text', () => (
    <Button label="This is sample button" />
  ));