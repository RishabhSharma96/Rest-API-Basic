const mongoose = require('mongoose')
const validator = require('validator')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Please enter valid e-mail')
            }
        }
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
        min: 10
    },
    address: {
        type: String,
        required: true
    }
})

const studentData = new mongoose.model('studentData', studentSchema)

module.exports = studentData