// Import necessary modules
const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('./config/passport'); // This will import your Passport configuration

const app = express();
const port = 3001;

// Set up session management
app.use(session({
    secret: process.env.GITHUB_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
}));

// Initialize Passport and session
app.use(passport.initialize());
app.use(passport.session());

// Import and use routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;
