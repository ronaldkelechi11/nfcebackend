const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "",
    password: "",
    database: "nfcedb"
})

/* To make a query use 
 const db = require("../providers/db")
 
 db.getConnection(err, conn)=>{
    conn.query(query, (err, result, fields)=>{

    });
 }

*/

module.export = {
    getConnection: (callback) => {
        return pool.getConnection(callback)
    }
}