const jwt = require("jsonwebtoken"); // <<< install this npm package

const { jwtSecret } = require("../config/secrets.js");

const restrictedMiddleware = () => {
    return (req, res, next) => {
        const { authentication } = req.headers;

        if (authentication) {
            jwt.verify(authentication, jwtSecret, (err, decodedToken) => {
                if (err) {
                    res.status(401).json({ message: "Invalid Credentials" });
                } else {
                    req.decodedToken = decodedToken;

                    next();
                }
            });
        } else {
            res.status(400).json({ message: "No credentials provided" });
        }
    };
}