import mongoose from 'mongoose';

function establishConnectionToDatabase() {
  mongoose.connect(process.env.DATABASE_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
   });

  const db = mongoose.connection;

  db.on('error', (error) => `Error during connectin to DB: ${error}`);
  db.once('open', () => console.log('Connected to Mongo database'));
}

export {
  establishConnectionToDatabase,
}