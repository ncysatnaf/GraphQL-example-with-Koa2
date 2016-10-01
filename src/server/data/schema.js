import {
  GraphQLSchema as Schema,
  GraphQLString as StringType,
  GraphQLObjectType as ObjectType
} from 'graphql'

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: StringType,
        resolve(){
          return 'World'
        }
      }
    }
  })
})

export default schema
