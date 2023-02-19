const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    firstname:{type:String, required:true},
    id_number:{type:String, required:true}
})

const User = mongoose.model('user', userSchema)
module.exports = User