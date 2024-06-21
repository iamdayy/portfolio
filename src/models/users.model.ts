import { User } from '@interfaces/users.interface';
import { Document, Schema, model } from 'mongoose';

const UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const UserModel = model<User & Document>('User', UserSchema);
