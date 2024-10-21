const express = require('express')
const router = express.Router()

const {getUserCards} = require("../controllers/cards")

// define the home page route
router.get('/', (req, res) => {
  res.send(getUserCards(req,res))
})
// define the about route


module.exports = router