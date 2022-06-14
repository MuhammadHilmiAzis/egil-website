const express = require('express');
const router = express.Router();

router.get('/test', function(req, res, next) {
    res.send('hello world')
});

module.exports = router;