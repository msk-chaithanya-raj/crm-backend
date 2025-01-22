const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger/swagger.json");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", routes);

module.exports = app;
