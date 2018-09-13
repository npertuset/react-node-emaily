const passport = require('passport');
const GoogleStrategery = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});


passport.use(
  new GoogleStrategery({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  (accessToken, refreshToken, profile, done) => {

    // console.log('access token', accessToken);
    // console.log('refresh token', refreshToken);
    // console.log('profile ', profile);

    User.findOne({ googleId: profile.id })
      .then((existingUser) => {
        if(existingUser) {
          // we already have a record with the given profile // IDEA:
          done(null, existingUser);
        } else {
          // we don't have a user record, make a new record
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
  })
);