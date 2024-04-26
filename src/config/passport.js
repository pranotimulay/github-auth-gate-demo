const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

require('dotenv').config(); // Ensure environment variables are loaded

passport.use(new GitHubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: "http://localhost:3001/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
        return cb(null, profile); // Here you might want to match the GitHub profile with a user record in your database
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id); // Serialize user session by ID
});

passport.deserializeUser((id, done) => {
    // Here you should find the user by ID from your database
    done(null, {id: id}); // This is simplified
});
