var mysql = require("mysql");


module.exports = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'ifms',
        password: 'ifms',
        database: 'portal_noticias'
    });
}
