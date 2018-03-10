const Router = require('koa-router');
const Koa = require('koa');

const app = new Koa();
const config = require('./config.js');
const router = new Router();

router.all('/echo', (ctx, next) => {
  ctx.body = ctx.request;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(config.port);
