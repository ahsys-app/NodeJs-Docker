const express = require('express');
const app = express();

const PORT  = 8080;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
    console.log("main")
    res.send({message: "main page"});
});

app.get('/test', (req, res) => {
    console.log("test page")
    res.send({message: "test message"});
});

app.listen(PORT, HOST, () =>
    console.log(`Server listening to http://localhost:${PORT}`)
);