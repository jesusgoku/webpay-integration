import path from 'path';
import { readFileSync } from 'fs';
import { Webpay, Configuration } from 'transbank-sdk';

import {
  WEBPAY_COMMERCE_CODE,
  WEBPAY_COMMERCE_CERT_PATH,
  WEBPAY_COMMERCE_KEY_PATH,
} from '../config';
import logger from '../logger';

// const config = Configuration.forTestingWebpayPlusNormal();
const config = new Configuration()
  .withPrivateCert(String(readFileSync(path.resolve(__dirname, '../..', WEBPAY_COMMERCE_KEY_PATH))))
  .withPublicCert(String(readFileSync(path.resolve(__dirname, '../..', WEBPAY_COMMERCE_CERT_PATH))))
  .withCommerceCode(WEBPAY_COMMERCE_CODE);

logger.debug(config);

export default new Webpay(config).getNormalTransaction();
