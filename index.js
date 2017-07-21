const config    = require('config');
const mysql     = require('promise-mysql');
const promise   = require('bluebird');

let connection;

function create(connection) {
    const query = 'INSERT INTO titles SET ?';
    const params = {'title': 'I am a title'};

    return connection.query(query, params)
        .then(results => console.log(results));
}

function update(connection) {
    const now    = new Date();
    const query  = 'UPDATE titles SET ? WHERE id = ?';
    const params = [{'modified': now}, 4];

    return connection.query(query, params)
        .then(results => console.log(results));
}

mysql.createConnection(config.get('db'))
    .then(conn => connection = conn)
    .then(() => create(connection))
    .then(() => promise.delay(2000))
    .then(() => update(connection))
    .finally(() => connection.end());
