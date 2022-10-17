const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
 fullName:{
  type:String,
  required:true
 },
 email:{
  type:String,
  unique:true,
  lowercase:true,
  required:true
 },
 password:{
  type:String
 },

})
module.exports = mongoose.model('User',userSchema)