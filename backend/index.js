import dotenv from 'dotenv';

import app from './app';
import { establishConnectionToDatabase } from './mongo';
import { seedUserData } from './utils/data';

dotenv.config();

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
  establishConnectionToDatabase();
  // seedUserData();
});
