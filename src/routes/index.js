const express = require('express');
const router = express.Router();
const passport = require('passport');

// Route to start GitHub authentication
router.get('/auth/github', passport.authenticate('github'));

// GitHub callback route
router.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/'); // Redirect to home on successful authentication
    });

// Home route
router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.send('Welcome! <a href="/logout">Logout</a>');
    } else {
        res.send('Please <a href="/auth/github">login with GitHub</a>');
    }
});

// Logout route
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;
