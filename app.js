const express = require('express');
const app = express();
const hapi = require('@hapi/hapi');
const hapiJWT = require('hapi-auth-jwt2');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package.json');
const HapiAuthorization = require('hapi-authorization');
const auth_router = require('./routes/api.auth.router')
const user_router = require('./routes/api.user.router')
const JWTvalidate = require('./middleware/app.auth')
const PORT = process.env.PORT || 5000;
const SECRET_KEY = process.env.SECRET_KEY;

require('dotenv').config();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function init() {
  const server = hapi.server({
    host: 'localhost',
    port: PORT,
    "routes": {
      "cors": true
    }
  })

  const swaggerOptions = {
    info: {
      title: 'Codelogicx HAPI Backend-POC Template',
      version: Pack.version,
      description: 'This is a sample example of API documentation.'
    },
    securityDefinitions: {
      jwt: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header'
      }
    },
    security: [{ jwt: [] }],

  };


  await server.register([
    Inert,
    Vision,
    hapiJWT,

    {
      plugin: HapiSwagger,
      options: swaggerOptions
    },
    {
      plugin: HapiAuthorization,
        options: {
            roles: ['ADMIN', 'USER', 'GUEST']
        }
    }
  ]);

  server.auth.strategy('jwt', 'jwt', {
    key: SECRET_KEY,
    validate: JWTvalidate,
    verifyOptions: {
      algorithm: ['HS256']
    }
  })

  server.auth.default('jwt')
  server.route(auth_router)
  server.route(user_router)

  server.start()
  return server


}
init().then((server) => {
  console.log(`server started on : ${server.info.uri}. Check swagger at ${server.info.uri}/documentation`);
})
  .catch((err) => {
    console.error(err);
  });