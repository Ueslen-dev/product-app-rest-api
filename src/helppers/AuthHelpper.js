const express = require('express')
const jwt = require('jsonwebtoken')

const User = require('../database/schema/user')
const authConfig = require('../config/auth.json')

class AuthHelpper{

    generateToken(params = {}){
        return jwt.sign(params , authConfig.secret, {
            expiresIn: 86400
        })
    }
}

module.exports = AuthHelpper