const express = require('express');
const app = express();
require('./router')(app);
const prod = process.env.NODE_ENV === "production" ? "prod" : "dev";
const config = require(`./config/${prod}.json`);
const port = config.server.port;

app.listen(port, () => {
    console.log(`app1 listening on port ${port}`)
})