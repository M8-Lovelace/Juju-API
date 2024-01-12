import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Metadata info about the API
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Juju Library API',
      version: '1.0.0',
    },
  },
  apis: [
    './src/routes/*.js',
    './src/models/*.js'
  ]
};

// Docs in JSON format
const swaggerSpec = swaggerJSDoc(options);

// Function to setup our docs
const swaggerDocs = (app, port) => {
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/api/v1/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
  app.listen(port, () => {
    console.log(`Swagger docs running at http://localhost:${port}/api/v1/docs`);
  });
};

export { swaggerDocs };
