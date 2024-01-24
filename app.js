const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer();

server.on("request", (request, response) => {
  "";
  const result = fs.readFileSync("./text.txt");

  response.setHeader("Content-Type", "text/plain");

  response.end(result);
});

server.listen(4080, "127.0.0.1", () => {
  console.log("Server has started on:", server.address());
});

// fs.writeFile("message.txt", "Hello from NodeJs", (err) => {
//   if (err) throw err;
//   console.log("the file has been saved!");
// });

fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
