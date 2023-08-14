import express from "express";
import userRouter from "./user.router.js";
import cityRouter from "./city.router.js"
const router = express.Router();

//req objeto solicitud + res objeto respuesta
router.get('/', (req, res)=>{
    res.send('Learning Node + Express');
})

router.use('/users', userRouter);
router.use('/cities', cityRouter);

export default router;