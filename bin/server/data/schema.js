'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var schema = new _graphql.GraphQLSchema({
  query: new _graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: _graphql.GraphQLString,
        resolve: function resolve() {
          return 'World';
        }
      }
    }
  })
});

exports.default = schema;