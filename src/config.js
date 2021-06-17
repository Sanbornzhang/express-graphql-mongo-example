module.exports = {
  prot: process.env.PROT || 9090,
  mongoUrl: '127.0.0.1:27017/test',
  logger: {
    level: process.env.LOG_LEVEL || 'debug',
    config: {
      appenders: {
        access: {
          type: "dateFile",
          filename: process.env.LOG_ACCESS_PATH || "./logs/access.log",
          pattern: "-yyyy-MM-dd",
          category: "http"
        },
        app: {
          type: "file",
          filename: process.env.LOG_PATH || "./logs/app.log",
          maxLogSize: 10485760,
          numBackups: 3
        },
        errorFile: {
          type: "file",
          filename: process.env.LOG_ERROR_PATH ||"./logs/errors.log"
        },
        errors: {
          type: "logLevelFilter",
          level: "ERROR",
          appender: "errorFile"
        }
      },
      categories: {
        default: { appenders: [ "app", "errors" ], level: "DEBUG" },
        http: { appenders: [ "access"], "level": "DEBUG" }
      }
    }
  },
  graphiql: process.env.NODE_ENV === "dev",
}
