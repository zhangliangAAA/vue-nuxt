const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()
// logger

app.use(async (ctx, next) => {
  await next()
  const rt = ctx.response.get('X-Response-Time')
  console.log(`${ctx.method} ${ctx.url} - ${rt}`)
})

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

// router
router
.get('/', async(ctx, next) => {
  await next()
  ctx.body = 'Hello World!'
})
.get('/user', async(ctx, next) => {
  await next()
  ctx.body = {
    code: 1,
    data: {
      userName: 'zlh',
      age: 23
    }
  }
})
// response

// app.use(async ctx => {
//   ctx.body = 'Hello World'
// })

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3003)