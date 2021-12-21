import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import reviewRoutes from './routes/reviewRoutes';
import universityRoutes from './routes/universitiesRoutes';

dotenv.config();

const app =  express(),
    basePath = process.env.API_VERSION;

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// routes
app.use(`/${basePath}/reviews`, reviewRoutes);
// app.use(`/${basePath}/universities/:id/reviews`, reviewRoutes);
app.use(`/${basePath}/universities`, universityRoutes);

// test route
app.use(`/${basePath}/test`, (req, res) => {
    res.json('Hello Space Systems!');
});

export default app;