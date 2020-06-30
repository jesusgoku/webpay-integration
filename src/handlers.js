/* eslint-disable no-console */
import transbank from './services/transbank';
import logger from './logger';

import { BASE_URL } from './config';

async function home(_req, res) {
  const amount = 10000;
  const sessionId = 'mi-id-de-session';
  const buyOrder = 100000001;
  const returnUrl = `${BASE_URL}/transbank/return`;
  const finalUrl = `${BASE_URL}/transbank/final`;

  const { token, url } = await transbank.initTransaction(
    amount,
    buyOrder,
    sessionId,
    returnUrl,
    finalUrl,
  );

  res.send(`
    <form method="post" action="${url}">
      <input type="hidden" name="token_ws" value="${token}" />
      <button type="submit">Transaction Start</button>
    </form>
  `);
}

async function transactionReturn(req, res) {
  const { token_ws: token } = req.body;

  const response = await transbank.getTransactionResult(token);

  console.dir(response, { depth: null });

  const { urlRedirection: url } = response;
  const { responseCode } = response.detailOutput[0];

  if (responseCode !== 0) {
    res.send('<p>Transaction error</p>');
    return;
  }

  res.send(`
    <form method="post" action="${url}">
      <input type="hidden" name="token_ws" value="${token}" />
      <button type="submit" id="submit">Finish</button>
    </form>
    <script>
      document.getElementById('submit').click();
    </script>
  `);
}

async function transactionFinal(req, res) {
  console.dir(req.body, { depth: null });

  const { token_ws: token } = req.body;

  if (!token) {
    res.send('<p>Transaction cancelled</p>');
    return;
  }

  res.send('<p>Transaction successful</p>');
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, _req, res, _next) {
  logger.error(err.message);

  res.send(`
    <p>${err.message}</p>
  `);
}

export { home, transactionReturn, transactionFinal, errorHandler };
