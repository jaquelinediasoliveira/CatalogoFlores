const express = require('express');
const app = express();

app.use(express.json());

app.get('/Backend', (req, res) => { 
    res.json("Hello, world!");
});

app.listen(3000, () => {
    console.log("Porta 3000 rodando");
});

// ja instalei o cors e o mysql