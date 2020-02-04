const {
  ExternalTaskWorker,
} = require('@process-engine/consumer_api_client');

const processEngineUrl = 'http://localhost:56000';
const topic = 'RabattcodeVersenden';
const maxTasks = 10;
const longpollingTimeout = 1000;
const identity = {
    token: 'ZHVtbXlfdG9rZW4=',
};

function validateCartAmount(cartAmount) {
  console.log(cartAmount);
  let cartAmountAsNumber = parseInt(cartAmount);
  if(isNaN(cartAmountAsNumber)) {
    throw new Error('Cart amount must be a number.');
  }

  if(cartAmountAsNumber < 0) {
    throw new Error('Cart amount must not be a negative number.');
  }

  return true;
}

function validateEmail(email) {
  if(!email.includes('@')) {
    throw new Error('Email must contain an @.');
  }

  return true;
}

const sendDiscountCode = (externalTask) => {
  const result = 'Rabattcode erfolgreich versandt.';

  validateCartAmount(externalTask.payload.cartAmount);
  validateEmail(externalTask.payload.email);

  return result;
};

const externalTaskWorker = new ExternalTaskWorker(processEngineUrl, identity, topic, maxTasks, longpollingTimeout, sendDiscountCode);

externalTaskWorker.start();
