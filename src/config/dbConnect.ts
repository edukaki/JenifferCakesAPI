import mongoose from 'mongoose';

const url: string = process.env.DB__URL as string;
mongoose.connect(url);
const db = mongoose.connection;

export default db;
