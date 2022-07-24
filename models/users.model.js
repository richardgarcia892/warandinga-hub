import mongoose from 'mongoose';
import { userDbErrors } from '../enums/db.enums';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, require: true },
  interests: { type: String },
});

userSchema.pre('save', function (next) {
  const self = this;
  User.find({ userName: self.userName }, (err, docs) => {
    if (!docs.length) {
      next();
    } else {
      next(new Error(userDbErrors.userNameAlreadyExist));
    }
  });
});

userSchema.pre('save', function (next) {
  const self = this;
  User.find({ email: self.email }, (err, docs) => {
    if (!docs.length) {
      next();
    } else {
      next(new Error(userDbErrors.emailAlreadyExist));
    }
  });
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
