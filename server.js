const express = require("express");
const server = express();
const hostname = "127.0.0.1";
const port = 3000;

server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  res.send(`
    <form method="POST" action="/submit">
      <label for="a">A:</label>
      <input type="text" id="a" name="a"><br><br>
      <label for="b">B:</label>
      <input type="text" id="b" name="b"><br><br>
      <label for="option">Add/Sub</label><input value="add" type="checkbox" id="option" name="option"/><br><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

server.post("/submit", (req, res) => {
  let { a, b,option } = req.body;
  a=Number(a);
  b=Number(b);
  let result=a-b;
  if(option=="add")
    result=a+b;
  res.send(`a: ${a}, b: ${b}, option:${option}, Result: ${result}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
