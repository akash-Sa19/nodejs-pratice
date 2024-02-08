const { log } = require("console");
const http = require("http");

// const server = http.createServer((req, res) => {
//   res.write("hello world");
//   res.statusCode(404);
//   res.end();
// });
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    console.log("server running");
    res.end("welcome to homepage");
    // res.write("welcome to homepage");
    // req.end();
  } else if (req.url === "/about") {
    res.end("about section");
  } else {
    res.end(`<h1>404: resource not found</h1>
    <a href="/">home</a>`);
  }
});

server.listen(5000, () => {
  console.log("http://localhost:5000");
});
