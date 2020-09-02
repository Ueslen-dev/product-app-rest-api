const express = require('express')
const mongoose = require('mongoose')

const User = require('../../database/schema/user')
const AuthHelpper = require('../../helppers/AuthHelpper')

const auth = new AuthHelpper()



class UserController{

    index = () => {}

    save = async (req, res) => {
        try{
            const {
                name,
                email,
                password
            } = req.body
    
            const userInsert = new User({
                name,
                email,
                password
            })

            if(await User.findOne({ email }))
                return res.status(400).json({error: "user exist"})
            
            userInsert.save()

            return res.send({
                userInsert,
                token: auth.generateToken({ id: User.id })
            })

        }catch(err){
            console.log(err)
            return res.status(400).json({error: "error intern"})
        }
    }

    search = () => {}

}

module.exports = UserController