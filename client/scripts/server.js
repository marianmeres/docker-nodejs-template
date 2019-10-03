const dotenv = require('dotenv');
dotenv.config();

const fs = require('fs');
const express = require('express');
const path = require('path');
const DIR_DIST = path.join(__dirname, '../dist');

const host = process.env.HOST || '0.0.0.0';
const port = parseInt(process.env.PORT, 10);

const app = express();

app.use('/', express.static(DIR_DIST));

app.listen(port, host, (err) => {
    console.log(`Client served on ${host}:${port}...`);
});
