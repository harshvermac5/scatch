const mongoose = require('mongoose');

mongoose
.connect('mongodb://127.0.0.1:27021/scatch')
.then(function(){
    console.log('connected')
})
.catch(function(){
    console.log('connection failed')
})

module.exports = mongoose.connection;