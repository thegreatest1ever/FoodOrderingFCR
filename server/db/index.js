const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://mugzdzed:mugzdzed@cluster0.j8enlct.mongodb.net/food-ordering', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db