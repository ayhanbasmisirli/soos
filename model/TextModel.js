const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TextSchema = new Schema({
  textInput: String,
  counter: Number
})

module.exports = mongoose.model("TextModel", TextSchema)
