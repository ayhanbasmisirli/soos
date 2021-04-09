const express = require("express")
const mongoose = require("mongoose")
const app = express()

mongoose
  .connect("mongodb://127.0.0.1:27017/stringDb", {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("database connnection"))
  .catch((err) => console.error(err))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const TextControl = require("./Controller/TextControl")

app.post("/input", TextControl.input)
app.get("/query", TextControl.query)

app.listen(9000, () => console.log("Server is running at port 9000"))
