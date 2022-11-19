/**
 * Import all necessary modules
 */
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { errorResponse, responseCode } = require('./src/utilities/helpers');

// Initialize App
const app = express();

app.use(helmet());
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
};

app.use(cors(corsOptions));


app.get('/', ((req, res) => res.send('Grandysoft accessment by Ufuoma Ogodo')));

// Accept only application/json
app.use((req, res, next) => {
  if (req.headers.accept !== 'application/json') { return errorResponse(res, 415, 'Header error', ['Pls add application/json to the accept header.']); }

  next();
});

// Add application/json as content-type header to response
app.use((req, res, next) => {
  res.setHeader('charset', 'utf-8');
  res.setHeader('content-type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Application Route
const apiRoutes = require('./src/routes');

// Set the default route
app.use('/api/v1', cors(corsOptions), apiRoutes);

// handle 404 error
app.use((req, res, next) => {
  errorResponse(res, responseCode.NOT_FOUND, 'Not Found', ["The resource you're trying to access was not found."]);
  next();
});

/**
  * handle errors
  */
app.use((err, req, res) => {
  if (err.status === 404) { errorResponse(res, responseCode.NOT_FOUND, 'Not Found', ['The resource you\'re trying to access was not found.']); } else {
    errorResponse(res, responseCode.INTERNAL_SERVER_ERROR, 'Server error', [err]);
  }
});

module.exports = app;
