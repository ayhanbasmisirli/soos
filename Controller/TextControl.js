const TextModel = require("../model/TextModel")

module.exports = {
  input: (req, res) => {
    let textString = new TextModel({
      textInput: req.body.textInput,
      counter: 0
    })

    textString
      .save()
      .then((result) => {
        res.json({ success: true, result })
      })
      .catch((err) => {
        res.json({ success: false, result: err })
      })
  },

  query: (req, res) => {
    TextModel.findOneAndUpdate(
      { _id: req.body._id },
      { $inc: { counter: 1 } },
      { new: true },
      () => {
        TextModel.findById({ _id: req.body._id })
          .then((result) => {
            res.json({ success: true, result: result })
          })
          .catch((err) => res.json({ success: false, result: err }))
      }
    )
  }
}
