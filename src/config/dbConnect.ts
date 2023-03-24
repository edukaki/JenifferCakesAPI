import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const url: string = process.env.DB__URL!;
mongoose.connect(url);
const db = mongoose.connection;

export default db;
