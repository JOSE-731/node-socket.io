/* Importing the express module and creating an express application. */
import express from 'express';
import path from 'path';
const app = express();

app.use(express.static(path.join(__dirname, 'public')))
export default app;