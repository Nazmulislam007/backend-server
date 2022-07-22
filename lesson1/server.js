// const http = require("http");
// const port = 8000;
// const hostname = "127.0.0.1";

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("<h1>All books are here</h1>");
//     res.statusCode = 200;
//     res.end();
//   } else if (req.url === "/bookid") {
//     res.write("<h1>Only books are here</h1>");
//     res.statusCode = 200;
//     res.end();
//   } else {
//     res.write("<h1>404 not found</h1>");
//     res.statusCode = 404;
//     res.end();
//   }
// });

// server.listen(port, () => {
//   console.log(`server running at http://${hostname}:${port}`);
// });

const express = require("express");
const app = express();

app.use(express.json());

const books = [
  {
    id: 1,
    name: "Javascript",
    price: 500,
  },
  {
    id: 2,
    name: "Node.js",
    price: 400,
  },
  {
    id: 3,
    name: "React.js",
    price: 200,
  },
  {
    id: 4,
    name: "Next.js",
    price: 700,
  },
];

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/books", (req, res) => {
  switch (req.query.show) {
    case "500":
      const filterBook = books.filter((book) => book.price < 500);
      return res.json(filterBook);
    case "all":
      return res.json(books);
    default:
      return res.json(books);
  }
});

app.post("/books", (req, res) => {
  const book = req.body;
  books.push(book);
  res.json(books);
});

app.listen(3330, () => {
  console.log("server running");
});
