"use strict";
const body_parser_1 = require('body-parser');
//const schema = new GraphQLSchema()
exports = module.exports = function (app) {
    app.use('/graphql', body_parser_1.json()); //, graphqlExpress({  schema}))
};
