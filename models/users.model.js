/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, require: true },
  interests: { type: String },
});

userSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    const newRet = ret;
    delete newRet._id;
  },
});

const User = model('User', userSchema);
export default User;
