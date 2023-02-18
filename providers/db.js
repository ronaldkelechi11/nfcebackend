const { createPool, createConnection } = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "nfcedb",
    connectionLimit: 20
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
    }
}