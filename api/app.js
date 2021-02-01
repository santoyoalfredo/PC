var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var session = require("express-session");

var indexRouter = require('./routes/index');
var APIRouter = require("./routes/api");

var app = express();
var db = require('./db');

var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require('../config.json');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors({
  origin: "http://localhost:3000", // allow to server to accept request from different origin
  credentials: true, // allow session cookie from browser to pass through
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(session({ secret: "turtles" }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use("/api", APIRouter);

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:9000/auth/google/callback"
},
  function (accessToken, refreshToken, profile, done) {
    db.getGoogleUser(profile).then(user => done(null, user));
  }
));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
