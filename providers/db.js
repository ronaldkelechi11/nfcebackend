const mysql = require('mysql');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "nfcedb",
    connectionLimit: 200
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