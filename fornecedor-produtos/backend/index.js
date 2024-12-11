const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Rota de associação entre fornecedores e produtos!');
});

module.exports = router;