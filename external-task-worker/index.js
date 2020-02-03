const {HttpClient} = require('@essential-projects/http');
const {
  ExternalTaskApiClientService,
  ExternalTaskApiExternalAccessor,
  ExternalTaskWorker,
} = require('@process-engine/external_task_api_client');

const {
  ExternalTaskFinished,
} = require('@process-engine/external_task_api_contracts');

const identity = {
    token: 'ZHVtbXlfdG9rZW4=',
};

const TOPIC = 'RabattcodeVersenden';
const MAX_TASKS = 10;
const POLLING_TIMEOUT = 1000;

const sendDiscountCode = async (payload) => {
  const result = 'Rabattcode erfolgreich versand.';
    console.log(result);

    return result;
};

async function main() {
  const externalTaskWorker = createExternalTaskWorker('http://localhost:56000');

  console.log(`Warten auf Aufgaben für das Topic '${TOPIC}'.`);

  externalTaskWorker.waitForAndHandle(identity, TOPIC, MAX_TASKS, POLLING_TIMEOUT, async (externalTask) => {
    console.log('Daten external-Task: ');
    console.log(externalTask);
    console.log('');

    const result = await sendDiscountCode(externalTask.payload);

    const externalTaskFinished = new ExternalTaskFinished(externalTask.id, result);

    return externalTaskFinished;
    });
}

main();

function createExternalTaskWorker(url) {
  const httpClient = new HttpClient();
  httpClient.config = {url: url};

  const externalAccessor = new ExternalTaskApiExternalAccessor(httpClient);

  const externalTaskAPIService = new ExternalTaskApiClientService(externalAccessor);

  const externalTaskWorker = new ExternalTaskWorker(externalTaskAPIService);

  return externalTaskWorker;
}
