const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/send-activation-email', (request, response) => {
  const cartAmount = request.body.cartAmount;
  const email = request.body.email;

  let cartAmountAsNumber = parseInt(cartAmount);
  if(isNaN(cartAmountAsNumber)) {
    return response.status(400).send('Cart amount must be a number.');
  }

  if(cartAmountAsNumber < 0) {
    return response.status(400).send('Cart amount must not be a negative number.');
  }

  if(!email.includes('@')) {
    return response.status(400).send('Email must contain an @.');
  }

  response.send('Activation email was sent successfully.')
});

app.post('/send-reseller-code', (request, response) => {
  const cartAmount = request.body.cartAmount;
  const email = request.body.email;

  let cartAmountAsNumber = parseInt(cartAmount);
  if(isNaN(cartAmountAsNumber)) {
    return response.status(400).send('Cart amount must be a number.');
  }

  if(cartAmountAsNumber < 0) {
    return response.status(400).send('Cart amount must not be a negative number.');
  }

  if(!email.includes('@')) {
    return response.status(400).send('Email must contain an @.');
  }

  response.send('Reseller code was sent successfully.')
});

app.listen(17291)
