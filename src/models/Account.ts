import { model, Schema, Document } from 'mongoose';

export interface IAccount {}

export interface IAccountDocument extends IAccount, Document {}

const account = new Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
        },
    },
    {
        timestamps: { createdAt: true, updatedAt: true },
    }
);

export const Account = model('accounts', account);
