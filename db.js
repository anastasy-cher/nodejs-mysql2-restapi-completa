const {createPool} = require('mysql2/promise')

const pool = createPool({
    host:'localhost',
    port:3306,
    user:'root',
    password:'1234',
    database:'companydb'
})

module.exports = pool