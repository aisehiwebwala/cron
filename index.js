const express = require('express')
const app = express()
const port = 3000


const cron = require("node-cron");

cron.schedule("* * * * *",async()=>{
    fetch("https://proto.choreoapps.dev/env");
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))