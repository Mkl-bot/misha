const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = '<html><body id="body">hi</body></html>';
});

const PORT = 3000;
const callback = () => {
  console.log(`🚀 Web Server started http://localhost:${PORT}`);
};
app.listen(PORT, callback);

callback();
