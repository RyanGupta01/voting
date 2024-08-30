const jwt = require("jsonwebtoken");

function jwtDecoder(token){
    return jwt.verify(token,'ryan_secret_key');
}

module.exports = jwtDecoder;