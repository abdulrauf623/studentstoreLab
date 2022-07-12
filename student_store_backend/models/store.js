const db = require("/Users/abdul.karim/studentstoreLab/student_store_backend/db")

class Store {



    static async list(){


        const results = await db.query(`SELECT * FROM products;`)


        const products = results.rows


        return products


    }







}


module.exports = Store