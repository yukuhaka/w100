const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '65.109.122.227',
    user: 'fcppyaam_Win100_Club',
    password: 'Win100@2024$7292',
    database: 'fcppyaam_win100'
});
   // "start": "pm2 start src/server.js"

export default connection;