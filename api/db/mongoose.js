const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/FoodApp', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(() => {
    console.log('Connected Successfully')
}).catch((error) => {
    console.log('Error to connect' + error)
})
module.exports = { mongoose };