const express = require('express');
const router = express.Router();

const userController = require('./controller/userController');

router.get('/ping', (req, res) => {
    res.json({return:true});
});

router.get('/states', userController.getStates);

router.get('/users', userController.getUser);

module.exports = router;