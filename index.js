const config    = require('config');
const mysql     = require('promise-mysql');

// mysql.createConnection(config.get('db'))
//     .then(conn => connection = conn)
//     .then((response) => console.log(response))
//     .finally(() => connection.end());

// mysql.createConnection(config.get('db'))
//     .then(conn => connection = conn)
//     .then(() => connection.query('DESCRIBE titles'))
//     .then((response) => console.log(response))
//     .finally(() => connection.end());

function create() {
    const query = 'INSERT INTO titles SET ?';
    const params = {'title': 'I am a title'};

    let connection;

    mysql.createConnection(config.get('db'))
        .then(conn => connection = conn)
        .then(() => connection.query(query, params))
        .then(results => console.log(results))
        .finally(() => connection.end());
}

function update() {
    const query = 'UPDATE titles SET ? WHERE id = ?';
    const params = [{
        'modified': new Date()
    }, 4];

    let connection;

    mysql.createConnection(config.get('db'))
        .then(conn => connection = conn)
        .then(() => connection.query(query, params))
        .then(results => console.log(results))
        .finally(() => connection.end());
}

update()
