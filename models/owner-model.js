const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        trim: true
    },
    email: String,
    password: String,
    products: {
        type: Array,
        default: []
    },
    gstin: String,
    picture: String
});

module.exports = mongoose.model('owner', ownerSchema)