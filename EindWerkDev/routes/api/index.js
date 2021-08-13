
const express = require('express');
const router = express.Router();
const sportAgendaRoute = require('./sportagenda');
const StatisRoute = require('./statistieken');

router.use('/sportAgenda',sportAgendaRoute);
router.use('/statistieken',StatisRoute);

module.exports = router;