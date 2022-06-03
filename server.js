const express = require('express')
const app = require('liquid-express-views')(express())
const port = 3000
const drinks = require('./models/drinks.js')

app.get('/drinks', (req, res) => {
    res.render('index', {
        allDrinks: drinks
    })
})

app.get('/drinks/:indexOfDrink', (req, res) => {
    res.render('show', {
        drink: drinks[req.params.indexOfDrink]
    })
})

app.listen(port, () => {
    console.log(`Listening to port: ${port}`)
})

