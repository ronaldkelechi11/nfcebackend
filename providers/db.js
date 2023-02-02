const { createPool } = require('mysql');

const pool = createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
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

module.exports = {
    getConnection: (callback) => {
        return pool.getConnection(callback)
    }
}