const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost:27017/RestApiTutorial').then(() => {
    console.log('Connection successful...')
}).catch((err) => {
    console.log(err)
})