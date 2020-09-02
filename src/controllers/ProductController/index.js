const express = require('express')
const mongoose = require('mongoose')


const Product = require('../../database/schema/product')

class ProductController{
    
    index = async (req, res) => {
        return Product.find({}, (err, docs) => {
            res.status(200).json(docs)
        })
    }

    save = async (req, res) => {

        try{
            const {
                name,
                price,
                code,
                amount,
                description
            } = req.body

            const insertProduct = new Product({
                name,
                price,
                code,
                amount,
                description
            })
    
            if(await Product.findOne({ name }))
                return res.status(400).json({error: "product exist"})
    
            if(await Product.findOne({ code }))
                return res.status(400).json({error: "code exist"})
            
            insertProduct.save()
    
            return res.send({ insertProduct })

        }catch(err){

            console.log(err)
            return res.send(400).json({ error: "error intern" })
        }

    }

}

module.exports = ProductController