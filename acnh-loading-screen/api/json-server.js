const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('src/database.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

server.use((res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    next();
  });

module.exports = (req, res) => {
    server(req, res);
  };