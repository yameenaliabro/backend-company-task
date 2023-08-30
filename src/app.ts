import express from 'express';
import cors from 'cors';
import './db'
import apiErrorHandler from './middlewares/apiErrorHandler';
import { PORT } from './config';
import routes from './routes';

const app = express()
    .use(express.json())
    .use(cors())
    .use(routes)
    .use(apiErrorHandler);

app.listen(PORT, () => {
    console.log("🚀 ~ Server is running on port", PORT)
})