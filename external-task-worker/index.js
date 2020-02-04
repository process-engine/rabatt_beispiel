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

const sendDiscountCode = async (payload) => {
  const result = 'Rabattcode erfolgreich versand.';
    console.log(result);

    return result;
};

const externalTaskWorker = new ExternalTaskWorker(processEngineUrl, identity, topic, maxTasks, longpollingTimeout, sendDiscountCode);

externalTaskWorker.start();
