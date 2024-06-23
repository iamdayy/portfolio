import { Message } from '@interfaces/messages.interface';
import { Document, Schema, model } from 'mongoose';

const MessageSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
  },
});

export const MessageModel = model<Message & Document>('Message', MessageSchema);
