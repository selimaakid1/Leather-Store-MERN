const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator');

const Product = require('../models/Product')
const auth = require('../middleware/auth')

// Get product
router.get('/', auth , (req, res) => {
    res.send('get products')
})

// Add product 
router.post('/', auth , (req, res) => {
    res.send('add products')
})

// Delete product
router.delete('/:id', auth , (req, res) => {
    res.send('delete product')
})

// Update product
router.put('/:id', auth , (req, res) => {
    res.send('update product')
})

module.exports = router