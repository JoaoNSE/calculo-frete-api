const { Router } = require('express');
const FreteController = require('./controllers/FreteController');
//const DevController = require('./controllers/DevController');
//const SearchController = require('./controllers/SearchController');

const routes = Router();

//routes.get('/devs', DevController.index);
//routes.post('/devs', DevController.store);
//routes.delete('/devs/:id', DevController.destroy);

//routes.get('/search', SearchController.index);
routes.get('/frete', FreteController.index);

module.exports = routes;