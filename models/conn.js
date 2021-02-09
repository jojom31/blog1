const host = 'localhost',
    database = 'blog1',
    user = 'postgres';


const pgp = require('pg-promise')({
    query: function (event) {
        console.log('Query:', event.query);
    }
});

const options = {
    host,
    database,
    user
}

const db = pgp(options);

module.exports = db;

