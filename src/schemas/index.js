const { SchemaComposer } = require('graphql-compose')
const schemaComposer = new SchemaComposer();

const{ userQuery, userMutation } = require('../model')

schemaComposer.Query.addFields({
  ...userQuery,
})

schemaComposer.Mutation.addFields({
  ...userMutation
})

module.exports = schemaComposer.buildSchema()
