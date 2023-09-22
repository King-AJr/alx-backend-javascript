const express = require('express');
const app = express();
const PORT = 7865;

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the payment system')
});

app.get('/cart/:id(\\d+)', (req, res) => {
    res.status(200).send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
    const data = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      }
      res.status(200).json(data);
})

app.post('/login', (req, res) => {
    if (req.body) {
        res.status(200).send(`Welcome :${req.body.userName}`)
    }
})

app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`)
})

module.exports = app;