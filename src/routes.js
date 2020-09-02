const express = require('express')
const routes = express.Router()


const UserController = require('./controllers/UserController')
const AuthenticateController = require('./controllers/AuthenticateController')
const ProductController = require('./controllers/ProductController')
const authMiddleware = require('../src/middlewares/auth')

const User = new UserController()
const Auth = new AuthenticateController()
const Product = new ProductController()

routes.post('/user', User.save)
routes.post('/auth', Auth.userAuth)
routes.post('/product', authMiddleware, Product.save)
routes.get('/product', authMiddleware, Product.index)
routes.get('/product/:id', authMiddleware, Product.index)


module.exports = routes