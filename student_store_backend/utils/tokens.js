const jwt = require("jsonwebtoken");

const {PORT, SECRET_KEY} = require("../config");
const { use } = require("../routes/store");
console.log("secret key", SECRET_KEY)


const generateToken = (data) =>
  jwt.sign(data, SECRET_KEY, { expiresIn: "24h" });


const createUserJWT = (user)=> {

    const payload = {

        email : user.email,
        isAdmin : user.isAdmin || false
    }

    return generateToken(payload)
}

const validateToken = (token) => {

    try{

        const decoded = jwt.verify(token, SECRET_KEY)

        return decoded


    }
    catch(err){
        return {}
    }

}

const testToken = () => {


    const user = {email: "person@gmail.com"}

    const token = generateToken(user)

    console.log("Token", token)

    const validatedToken = validateToken(token)

    console.log("validated token", validatedToken)
}


module.exports = {

    generateToken,
    validateToken,
    createUserJWT
}
