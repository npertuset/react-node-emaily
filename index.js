const express = require('express');
const passport = require('passport');
const GoogleStrategery = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys.js');
const app = express();

// clientId: 458353643544-lderirlr6jf9hnct65pqv9isp4kv75fl.apps.googleusercontent.com
// clientSecret: EuCu71TuBRFIXnc-bkk3KWJG

passport.use(
  new GoogleStrategery({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },
  (accessToken, refreshToken, profile, done) => {
    console.log('access token', accessToken);
    console.log('refresh token', refreshToken);
    console.log('profile ', profile);
  })
);

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google')
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
