const jwt = require("jsonwebtoken")
const { UnauthorizedError } = require("../utils/errors")

const SECRET_KEY = process.env.SECRET_KEY


const jwtFrom = (req) => {

    if (req.header('authorization')){


        const [scheme, token] = req.header('authorization').split(" ")

        if (scheme.trim() === "Bearer"){

            return token
        }

    }

    return undefined


}

const extractUserFromJWT = (req, res, next) => {

    try{

    const token = jwtFrom(req)

    if (token){


        res.locals.user = jwt.verify(token, SECRET_KEY)
    }

    

    return next()

}

catch(err){

    console.log("Error", err)

    return next()

}
}


const requireAuthenticatedUser = (req,res,next) => {

    try{
        const {user} = res.locals


        if (!user?.email){

            throw new UnauthorizedError()
        }

        return next()

    }
    catch(err){


        return next(err)


    }

}


module.exports = {

    requireAuthenticatedUser,
    extractUserFromJWT,
    jwtFrom
}