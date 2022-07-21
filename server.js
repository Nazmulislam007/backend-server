const http = require("http");
const port = 8000;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>hellow world guys</h1>");
    res.statusCode = 200;
    res.end();
  } else if (req.url === "/demo") {
    res.write("<h1>Demo</h1>");
    res.statusCode = 200;
    res.end();
  } else {
    res.write("<h1>404 not found</h1>");
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, () => {
  console.log(`server running at http://${hostname}:${port}`);
});
