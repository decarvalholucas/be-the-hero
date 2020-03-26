const express = require("express");
const routes = express.Router();

// CONTROLLERS
const OngsController = require("./controllers/OngsController");
const IncidentsController = require("./controllers/IncidentsController");
const ProfileController = require("./controllers/ProfileController");
const SessionsController = require("./controllers/SessionsController");

routes.get("/ongs", OngsController.index);
routes.post("/ongs", OngsController.create);

routes.get("/incidents", IncidentsController.index);
routes.post("/incidents", IncidentsController.create);
routes.delete("/incidents/:id", IncidentsController.delete);

routes.get("/profile", ProfileController.index);

routes.post("/sessions", SessionsController.create);

module.exports = routes;
