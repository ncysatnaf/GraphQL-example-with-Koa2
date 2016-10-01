import koa from 'koa'
import Router from 'koa-router'
import mongoose from 'mongoose'
import Bodyparser from 'koa-bodyparser'
import {graphql} from 'graphql'
import args from '../utils/cli'
import schema from './data/schema'

let { PORT = 3000 } = args || process.env || {}
let router = new Router()
let app = new koa()

router.get('/graphql', async ctx => {
  const {query:{query}, params} = ctx
  ctx.body = await graphql(schema, query, '', params)
})

app.use(router.routes())
mongoose.connect('mongodb://localhost/graphql')

app.listen(PORT, ()=> {
  console.log(`app is listening on ${PORT}`)
})
