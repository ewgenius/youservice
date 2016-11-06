import * as keystone from 'keystone'
import { Application } from 'express'
import { json } from 'body-parser'
import { graphqlExpress } from 'graphql-server-express'
import { GraphQLSchema } from 'graphql'

//const schema = new GraphQLSchema()

exports = module.exports = function (app: Application) {
  app.use('/graphql', json())//, graphqlExpress({  schema}))
}