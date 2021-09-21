const app = require('express')()
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

// This endpoint reades the swagger config and serves the SwaggerUI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
module.exports = app
