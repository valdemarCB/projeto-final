const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Rota de cadastro de fornecedores!');
});

module.exports = router;