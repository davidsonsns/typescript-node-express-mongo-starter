import express from 'express';

const server = express();

server.get('/', (req, res) => {
  res.send('Hello ts-node!');
});

export default server;
