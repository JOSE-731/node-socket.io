/* This is a way to import the .env file into the app.js file. */
import {config} from 'dotenv';
config()

export const MONGODB_URI = process.env.MONGODB_URI;