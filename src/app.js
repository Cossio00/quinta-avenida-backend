const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');

const port = 3010;
const httpsPort = 3011;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
    console.log(`API running on port: ${port}`)
})