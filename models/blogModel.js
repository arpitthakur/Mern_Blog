const mongoose = require('mongoose')
const BlogSchema = mongoose.Schema({
  Title:{
    type:String
  },
  Description:{
    type:String
  },
  // categoryID: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Category"
  // }
})
module.exports = mongoose.model('Blog',BlogSchema)