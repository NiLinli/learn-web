const ronin = require('ronin-server');
const mocks = require('ronin-mocks');

const server = ronin.server();

server.use('/foo', (req, res) => {
  return res.json({ foo: 'bar' });
});
server.start();
