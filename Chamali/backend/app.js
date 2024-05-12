const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const level = require('./routes/level');
const topCompanies = require('./routes/topCompanies');

const app = express();

// CORS setup should be here, before the route definitions
app.use(cors({
  origin: 'http://localhost:3000', // Allow only the origin of your front-end app
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  credentials: true // Enable credentials, if your front-end needs to send cookies or headers that require authentication
}));

// ...rest of your setup

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/level', level);
app.use('/sustainability_level', topCompanies);



const PORT = process.env.PORT || 4000; 


module.exports = app;
