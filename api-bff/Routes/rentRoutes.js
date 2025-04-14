const express = require('express');
const router = express.Router();
const { startRent } = require('../controllers/rentController');

router.post('/start', startRent);
module.exports = router;
