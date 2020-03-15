import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  login: {
    type: String,
    unique: true,
  },
  password: String,
  salt: String,
  email: {
    type: String,
    unique: true,
  },
  type: String,
});

const userModel = mongoose.model('User', userSchema);

export {
  userSchema,
  userModel as User,
};
