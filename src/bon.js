const http = require("http");

class Dog {
  constructor(name) {
    this.name = name;
    console.log("Dog constructor", name);
  }
  wooff() {
    console.log("woooffff");
  }
}

const dog1 = new Dog("Chak");
const dog2 = new Dog("Norris");
console.log(dog1.name);
console.log(dog2.name);

class Bon extends Dog {
  color = "white";
  jump() {
    console.log("jump");
  }
}

const myBon = new Bon();
myBon.jump();
myBon.color;

class Koa {
  listen(port, callback) {
    http.createServer().listen(port);
    callback();
  }
}

const koa = new Koa();
koa.listen(3000, () => {
  console.log(`🚀 Web Server started http://localhost:${PORT}`);
});
