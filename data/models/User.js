import mongoose, { Schema } from 'mongoose';
import constants from '../config/constants';
import { hashSync, compareSync } from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  firstName: String,
  middleName:String,
  lastName: String,
  email: String,
});

UserSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password);
    this.jwt=this.createToken();
    return next();
  }

  return next();
});

UserSchema.methods = {
  _hashPassword(password) {
    return hashSync(password);
  },
  authenticateUser(password) {
    return compareSync(password, this.password);
  },
  createToken() {
    return jwt.sign(
      {
        _id: this._id
      },
      constants.JWT_SECRET
    )
  }
}

export default mongoose.model('User', UserSchema);
