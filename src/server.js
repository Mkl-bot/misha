const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = '<html><body id="body">hi</body></html>';
});

app.listen(3000);
