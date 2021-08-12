import express from 'express';
import bodyParser from 'body-parser';

const app =  express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const PORT  = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} !!!`);
});