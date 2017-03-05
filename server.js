var express = require('express');

var server = express();

server.use(express.static('node_modules/jp-time-tracker/dist'));

server.get('/hello', (req, res) => {
  var time = (new Date()).getTime();
  res.send({msg: 'Hello World!', time: time});
});

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
server.listen(server_port, server_ip_address, () => console.log('server ready'));
