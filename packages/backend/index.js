import dotenv from 'dotenv';

import { seedUserData } from 'src/utils/data';

import app from './src/app';
import { establishConnectionToDatabase } from './mongo';

dotenv.config();

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
  establishConnectionToDatabase();
  // seedUserData();
});
