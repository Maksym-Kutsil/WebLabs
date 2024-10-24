const express = require('express')
const cardController = require('../controllers/cards')
const router = express.Router()

router.get('/', cardController.getUserCards)
router.post('/', cardController.createCard)
router.put('/:id', cardController.updateCard)
router.delete('/:id', cardController.deleteCard)
router.get('/count', cardController.getTotalCost)
router.get('/search', cardController.searchCards)
router.get('/sort', cardController.sortCards)

module.exports = router