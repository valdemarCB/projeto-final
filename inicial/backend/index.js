const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Bem-vindo à página inicial da API!');
});

module.exports = router;