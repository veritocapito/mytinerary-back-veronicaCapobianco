import 'dotenv/config.js';
import './config/db.js'
import express from "express";
import morgan from "morgan";
import cors from "cors";

import indexRouter from './router/index.router.js';

const app = express();
const PORT = process.env.PORT || 8000 ;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'))
app.use(cors());

//router
app.use('/api', indexRouter );



app.listen(PORT, ()=> console.log('Server running on PORT: ' + PORT));