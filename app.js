'use strict'

const HTTP = require('http');

const HOSTNAME = '127.0.0.1';
const PORT = 3000;

const express = require ('express');
    session = require('express-session'),
    app = express();

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(session({
    secret: 'good vibes',
    resave: false,
    saveUnintitialized: false,
    is_logged_in: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static('public'));

const SERVER = HTTP.createServer(app);

SERVER.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});

const rootController = require('./routes/index');
const blogController = require('./routes/blog');
const usersController = require('./routes/users');


app.use('/', rootController);
app.use('/blog', blogController);
app.use('/users', usersController);