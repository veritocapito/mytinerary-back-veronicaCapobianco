const controller = {
    getCities:(req, res)=>{
        res.json({
            cities: [
                        { city:'Bariloche', country: 'Argentine'},
                        { city:'Barcelona', country: 'Spain'}
                    ]
        })
    },
    postCities: ()=>{},
    deleteCities: ()=>{}
}

export default controller;