import request from 'superagent'

request
  .get('http://localhost:3000/graphql')
  .query({
    query: `{
      hello
    }`
  })
  .end((err, res) => {
    !err && console.log(res.body.data)
  })
