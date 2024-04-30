const {DB_PORT, DB_HOST, DB_NAME, APP_PORT} = process.env;

const mongoose = require('mongoose');
const express = require('express');
const hiroki = require('hiroki');
const models = require('./src/models');
const bodyParser = require('body-parser');
const pino = require('pino-http')();
const firstUser = require('./src/utils/firstUser');
const {pathRegex} = require('./src/config/paths');
const extraxtJwt = require('./src/routes/extractJwt');
const auth = require('./src/routes/auth');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);


hiroki.importModels(models);

// create first user if not exists
firstUser();

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.use(pino);

app.use(pathRegex, extraxtJwt);

app.use('/api/auth', auth);

app.use('/api/*', async(req, res) => {
    const path = req.originalUrl;
    const resp = await hiroki.process(path, {
        method: req.method,
        body: req.body
    });
    res.status(resp.status || 200).json(resp);
});

app.listen(APP_PORT, () => {
    console.log(`Server running on port ${APP_PORT}`);
});

module.exports = app;
