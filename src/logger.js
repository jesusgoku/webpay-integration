import { createLogger, format, transports } from 'winston';

import { DEBUG_LEVEL, NODE_ENV } from './config';

export default createLogger({
  level: DEBUG_LEVEL || (NODE_ENV === 'production' ? 'warning' : 'debug'),
  format: format.json(),
  transports: [new transports.Console()],
});
