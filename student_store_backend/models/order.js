const db = require("../db")
const {BadRequestError} = require("../utils/errors")

class Order{


    static async listOrdersForUser(user){



        // orders for authenticated user


    }


    static async createOrder(user, body){

        const requiredFields = ["email"]

        requiredFields.forEach((property) => {
            if (!user.hasOwnProperty(property)) {
              throw new BadRequestError(`Missing ${property} in request body.`)
            }
          })


        console.log("email?", user.email)
        const results = await db.query(`insert into orders(customer_id) values((select id from users where email = $1)) returning id`, [user.email])


        const orderId = results.rows


        console.log("Order?", orderId)


        




        // will take a user's order and store it in the database

    }



}


module.exports = Order