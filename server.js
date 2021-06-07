const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

const members = [
  { name: "John Lennon" },
  { name: "Paul McCartney" },
  { name: "George Harrison" },
  { name: "Ringo Starr" },
];

app.get("/api", (req, res) => {
  res.send({ title: "The Beatles" });
});

app.get("/api/members", (req, res) => {
  res.send(members);
});

app.listen(port, () => console.log(`Port ${port}`));
