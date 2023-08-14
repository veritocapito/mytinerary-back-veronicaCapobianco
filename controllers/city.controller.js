import City from "../models/City.js";

const controller = {
    getCities: async (req, res)=>{

        let queries = {}

        if (req.query.city) {
            queries.city = new RegExp(`^${req.query.city}`, 'i')
        } 

        if (req.query.country) {
            queries.country = req.query.country
        } 

        try {
            const cities= await City.find(queries).populate('created_by_user')

            if (cities.length > 0) {
                return res.status(200).json({
                    success: true,
                    cities: cities
                })
                
            }

            return res.status(404).json({
                success: false,
                message: "Cannot find cities"
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Cannot read city"
            })
        }
    },
    getCityById :async (req ,res)=>{
        try {
            const oneCity= await City.findById(req.params.id)

            if (oneCity) {
                return res.status(200).json({
                    success: true,
                    cities: oneCity
                })
                
            }

            return res.status(404).json({
                success: false,
                message: "Cannot find city"
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
    readCities: (req, res)=>{},
    updateCities: (req, res)=>{},
    deleteCities: (req, res)=>{}
}

export default controller;