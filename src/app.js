import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';
import universityRoutes from './routes/universitiesRouter';

dotenv.config();

const app =  express(),
    basePath = process.env.API_VERSION;

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// routes
app.use(`/${basePath}/universities`, universityRoutes);

export default app;