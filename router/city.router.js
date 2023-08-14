import express from "express";
import cityController from "../controllers/city.controller.js";

const router = express.Router();

const { getCities, createCities, getCityById, updateCities, deleteCities} = cityController;

router.get('/', getCities )
    //metodos mongoose .create()

router.get('/:id', getCityById )
//mongoose .findById()

router.post('/', createCities )
    //mongoose .find() .findOne() .findById()

router.put('/:id', updateCities )
    //mongoose .findByIdAndUpdate()

router.delete('/:id', deleteCities )
    //mongoose .findByIdAndDelete()

export default router;