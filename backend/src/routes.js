const express = require("express");
const routes = express.Router();
const devController = require('./controllers/devController')
const LikeController = require('./controllers/likeController')
const DislikeController = require('./controllers/dislikeController')


routes.post('/devs', devController.store);
routes.get('/devs', devController.index);

routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);
module.exports = routes;