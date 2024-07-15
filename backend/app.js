const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
require("dotenv").config();
app.use(cors());
app.get("/api/users", (req, res) => {
  const users = [
    {
      id: 1,
      username: "user1",
      email: "user1@example.com",
    },
    {
      id: 2,
      username: "user2",
      email: "user2@example.com",
    },
  ];
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server Running on localhost:${PORT}`);
});
