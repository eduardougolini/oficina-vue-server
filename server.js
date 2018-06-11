const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser());


app.post('/login', (req, res, next) => {
    let email = req.body.email;
    let senha = req.body.senha;

    let authenticated = false;

    if (email === 'email@email.com' && senha === 'senha') {
        authenticated = true;
    }

    res.json({ 'authenticated': authenticated });
})

app.listen(3000, function () {
    console.log(':)');
});
