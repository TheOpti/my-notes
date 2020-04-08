import { configure } from '@storybook/react';

const req = require.context('../src/components', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

import '../src/fonts.css';
import '../src/index.css';

configure(loadStories, module);