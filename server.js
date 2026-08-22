const express = require("express");
const server = express();

const hostname = "127.0.0.1";
const port = 3000;

server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  res.send(`
    <form method="POST" action="/submit">

      <h3>Select Brand</h3>

      <input type="radio" name="brand" value="Dell"> Dell<br><br>
      <input type="radio" name="brand" value="Lenovo"> Lenovo<br><br>
      <input type="radio" name="brand" value="HP"> HP<br><br>

      <h3>Select Storage</h3>

      <input type="checkbox" name="storage" value="HD"> HD<br><br>
      <input type="checkbox" name="storage" value="SSD"> SSD<br><br>
      <input type="checkbox" name="storage" value="PD"> PD<br><br>

      <button type="submit">Submit</button>

    </form>
  `);
});

server.post("/submit", (req, res) => {

  const brand = req.body.brand;
  const storage = req.body.storage;

  res.send(`
    <h2>Selected Details</h2>
    <p>Brand: ${brand}</p>
    <p>Storage: ${storage}</p>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
