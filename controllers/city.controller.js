import City from "../models/City.js";

const controller = {
    getCities: async (req, res)=>{
        try {
            const cities= await City.find({})

            return res.status(200).json({
                success: true,
                cities: cities
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Cannot read city"
            })
        }

    },
    createCities: async (req, res)=>{

        try {
            const newCity= await City.create(req.body);

            return res.status(201).json({
                success: true,
                message: "New city created"
            });
        } catch (error) {
            return res.status(500).json({
            success: false,
            message: "Cannot create city"
            })
        }
    },
    //deleteCities: async (req, res)=>{}
}

export default controller;