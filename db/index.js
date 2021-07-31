const mysql = require('mysql');

const pool = mysql.createPool({ 
    connection: 10,
    password: process.env.password,
    user: 'kellywho',
    database: 'dnd_fifth_edition',
    host: 'localhost',
    port: 3306
});

let dnddb = {};

dnddb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM weapons', (err, res) => {
            if(err) {
                return reject(err);
            }
            return resolve(res);
        });
    });
}

dnddb.one = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM weapons WHERE weapon_id = ?', [id], (err, res) => {
            if(err) {
                return reject(err);
            }
            return resolve(res[0]);
        });
    });   
}

dnddb.name = (name) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM weapons WHERE name = ?', [name], (err, res) => {
            if(err) {
                return reject(err);
            }
            return resolve(res[0]);
        });
    });   
}

module.exports = dnddb;