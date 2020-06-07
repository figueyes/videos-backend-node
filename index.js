const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

const { logError, wrapError, errorHandler } = require('./utils/middleware/errorHandler');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

//body parsers
app.use(express.json());

//routes
moviesApi(app);

//404 error
app.use(notFoundHandler);

//middlewares
app.use(logError);
app.use(wrapError);
app.use(errorHandler);

app.listen(config.port, () => {
    console.log(`listening http://localhost:${config.port}`);
});