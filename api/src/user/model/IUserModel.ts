import { Document, Schema } from 'mongoose';

export interface IUserModel extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;

  comparePassword: (password: string) => Promise<boolean>;
}
