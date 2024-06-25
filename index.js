const express = require("express");
const app = express();
const port = 3000;
const dotenv = require("dotenv");
const cron = require("node-cron");

dotenv.config();

const data = JSON.parse(process.env.URLS);

cron.schedule("* * * * *", async () => {
  data.forEach((val) => {
    fetch(val);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
