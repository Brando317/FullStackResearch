import express from "express";
import apiRouter from './routes/index.js';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(cors())

app.use(morgan('dev'));

app.use(express.json())

app.use(express.static("public"))

app.use("/api", apiRouter)

app.use((err, req, res, next) => {
    try {
        res.status(err.status || 500).json({ errors: { err: err.message } })
    } catch (error) {
        next(error);
    }
})

app.listen(process.env.PORT || 8080, () => console.log("Server is Prepped!"))