const express = require('express');
const app = express();
require('./router')(app);
const config = require('./config.json');
const port = config.server.port;
const host = config.server.host ;

app.listen(port, () => {
    console.log(`app1 listening on port ${port}`)
})