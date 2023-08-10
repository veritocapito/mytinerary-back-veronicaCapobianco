import express from "express";
import morgan from "morgan";
import cors from "cors";

import indexRouter from './router/index.router.js';

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'))
app.use(cors());

app.use('/api', indexRouter );



app.listen(PORT, ()=> console.log('Server running on PORT: ' + PORT));