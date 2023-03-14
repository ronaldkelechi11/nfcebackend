const mysql = require('mysql');

const pool = mysql.createPool({
    host:"sql8.freesqldatabase.com",
    user: "sql8605623",
    password: "QiuZizWesJ",
    database: "sql8605623",
    port: 3306,
    connectionLimit: 2000
})
/* To make a query use 
 const db = require("../providers/db")
 
 db.getConnection(err, conn)=>{
    conn.query(query, (err, result, fields)=>{

    });
 }

*/
module.exports = {
    getConnection: (callback) => {
        return pool.getConnection(callback)
    },
}