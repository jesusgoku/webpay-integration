import path from 'path';
import { readFileSync } from 'fs';
import { createServer } from 'https';

import app from './app';
import logger from './logger';
import { PORT, SSL_CERT_PATH, SSL_KEY_PATH, BASE_URL } from './config';

createServer(
  {
    cert: readFileSync(path.resolve(__dirname, '..', SSL_CERT_PATH)),
    key: readFileSync(path.resolve(__dirname, '..', SSL_KEY_PATH)),
  },
  app,
).listen(PORT, () => {
  logger.info(`Listen on: ${BASE_URL}`);
});
