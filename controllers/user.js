const modelUser = require('../models/user')
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const User = modelUser.userModel
const bcrypt = require('bcrypt')
const jwt    = require('jsonwebtoken')

exports.register = function(req,res){
    (async () => {
        try {
            var post      = req.body;
            var username  = post.username;
            var email     = post.email;
            var password  = post.password;
            var password  = post.password;

            const salt    = await bcrypt.genSalt()
            const hashPassword = await bcrypt.hash(password, salt)
            
            if (Object.keys(email).length === 0 || Object.keys(username).length === 0 || Object.keys(password).length === 0) {
                const status =({
                    message: "Field cannot empty !",
                    status: 400
                })
                res.status(400).json(status)
                return
            }

            const newUser = await User.create({ 
                username: username,
                email: email,
                password: hashPassword
            });
            const status =({
                message: "Register successfully !!",
                status: 200
            })
            console.log("New User auto-generated username:", newUser.username);
            res.json(status)
            
        } catch (error) {
            let message = error
            let flag = Object.keys(error).length === 0;
            if (flag) {
                message = "Error !! Please check field requirement"   
            } else {
                message = error.parent.sqlMessage
            }
            let status = ({
                message: message,
                status: 404
            })
            res.status(404).json(status)
        }
    })();
}

exports.login = function(req,res){
    (async () => {
        try {
            var email = req.body.email
            var password = req.body.password
                        
            const user = await User.findOne({
                where:
                {
                    email: email
                }
            })

            if (user){
                console.log("login")
                // const match = await bcrypt.compare(password, user.password)
                // if(!match) {
                //     res.status(400).send("Wrong password !")
                // } else {
                //     const userName = user.name
                //     const userEmail = user.email
                    
                //     const accesToken = jwt.sign({userName,userEmail}, process.env.ACCESS_TOKEN_SECRET,{
                //         expiresIn: '60s'
                //     })
                //     const refreshToken = jwt.sign({userName,userEmail}, process.env.REFRESH_TOKEN_SECRET,{
                //         expiresIn: '1d'
                //     })
                //     await User.update({ refresh_token: refreshToken },{
                //         where: {
                //             email: userEmail
                //         }
                //     })

                //     res.cookie('refreshToken',refreshToken,{
                //         httpOnly: true,
                //         maxAge  : 24 * 60 * 60 * 100
                //     })
                    const response = ({
                        // accesToken: accesToken,
                        status: 200
                    })
                    res.status(200).json(response)
                // }
            } else {
                const status = ({
                    message: "User not found !",
                    status: 400
                })
                res.status(400).json(status)
            }
           
        } catch (error) {
            res.status(404).send("Something error, please check the field !")
            if (error) throw error
        }
    })();
}