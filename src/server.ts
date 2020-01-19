import { join } from 'path';
import express from 'express';
import bodyParser from 'body-parser';

import { router } from '~/router';

const server = express();
server.use(bodyParser.json());

// specify static folder
server.use(express.static(join(__dirname, '..', 'static')));

// frontend route
server.get('/', (req, res) => {
  res.render('index.html');
});

// API routes
server.use('/api', router);

// listen to requests

export { server };
