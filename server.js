'use strict';

var express = require('express'),
    app = express(),
    server = require('http').Server(app);

require('./server/routes/routes.js').routes(app, express);

var port = process.env.PORT || 3000;
server.listen(port);
console.log('listenin at '+port+' .......');
