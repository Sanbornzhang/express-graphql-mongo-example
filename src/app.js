const express = require('express');
const log4js = require('log4js')
const uuid = require('uuid')
const mongoose = require('mongoose')
const { graphqlHTTP } = require('express-graphql')

const config = require('./config')
const { extension } = require('./lib/graphql')
const graphqlSchemas = require('./schemas/');
const app = express();

log4js.configure(config.logger.config);
global.logger = log4js.getLogger("http")

app.use(log4js.connectLogger(log4js.getLogger(""), {
  level: 'auto',
  format: (req, res, format) => format(`:remote-addr - ${req.headers['request-id'] || uuid.v4()} - ":method :url HTTP/:http-version" :status :content-length ":referrer" ":user-agent"`)
}));

const startServer = async _=> {
  app.listen(config.prot, async _ => {
    logger.info(`server is running on port ${config.prot}`)
  })

  mongoose.connect(`mongodb://${config.mongoUrl}`, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
  const db = mongoose.connection;
  db.on('error', _ => {
    console.log(_);
    logger.error(_)
  })

  db.on('connected', _ => {
    console.log(`mongo db connected`);
  })
  app.use('/graphql', graphqlHTTP({
      schema: graphqlSchemas,
      context: { startTime: Date.now() },
      graphiql: config.graphiql,
      extensions: extension,
    }
  ))
}
startServer()

