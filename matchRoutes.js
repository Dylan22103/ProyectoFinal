const express = require('express');
const matchController = require('../controllers/matchController');

const router = express.Router();

router.get('/matches', matchController.getAllMatches);
router.post('/matches', matchController.createMatch);

module.exports = router;