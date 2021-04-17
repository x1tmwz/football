const express = require('express');
const cors =require('cors')
const route404 = require('./middleware/route404');
const apiErrorHandler = require('./middleware/apiErrorHanlder');
const markersRouter = require('./routers/markers');

const app = express();

app.use(cors());
app.use(express.json());

app.use(markersRouter);
app.use(route404);
app.use(apiErrorHandler);

module.exports = app;