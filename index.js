const http = require('http');
const httpProxy = require('http-proxy');

const port = process.env.PORT || 3002;
const appPort = process.env.APP_PORT || 5000;

const proxy = httpProxy.createServer();
http.createServer(function (req, res) {
  proxy.web(req, res, { target: `http://localhost:${appPort}` })
}).listen(port,()=>{
  console.log(`Listening on port ${port} and redirecting to port ${appPort}`)
});