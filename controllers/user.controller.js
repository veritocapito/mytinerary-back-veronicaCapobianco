import User from '../models/User.js'

const controller = {
    getUsers: async (req, res)=>{
        try {
            const users = await User.find(req.body)
            
            if (users.length > 0) {
                return res.status(200).json({
                    success: true,
                    users: users
                })
            }

            return res.status(404).json({
                success: false,
                message: "Cannot find users"
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Cannot read user"
            })
        }
    },
    createUser: async(req, res)=>{
        try {
            const newUser = await User.create(req.body)

            return res.status(200).json({
                success: true,
                message: "User successfully created"
            })

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Cannot create user"
            })
        }
    },
    deleteUser: ()=>{}
}

export default controller;