import * as Debug from 'debug';

import { getServer } from '../src/app';

const logger = Debug('warthog:generate');

async function generate() {
  return getServer({ mockDBConnection: true }).generateFiles();
}

generate()
  .then(result => {
    logger(result);
    return process.exit(0);
  })
  .catch(err => {
    console.log(err);
    return process.exit(1);
  });