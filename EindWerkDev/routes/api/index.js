const express = require('express');
const router = express.Router();
const sportAgendaRoute = require('./sportagenda');

router.use('/sportAgenda',sportAgendaRoute);

module.exports = router;