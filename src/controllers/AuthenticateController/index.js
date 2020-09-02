const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const User = require('../../database/schema/user')
const AuthHelpper = require('../../helppers/AuthHelpper')

const auth = new AuthHelpper()

class AuthenticateController{

    userAuth = async (req, res) => {
        const { email, password } = req.body

        const user = await User.findOne({ email }).select('+password')

        if(!user)
            return res.status(400).json({error: "user not found"})
        
        if(!await bcrypt.compare(password, user.password))
            return res.status(400).json({error: "incorret password"})
        
        user.password = undefined

        
        res.send({
            user, 
            token: auth.generateToken({ id: user.id })
        })
    }


}

module.exports = AuthenticateController