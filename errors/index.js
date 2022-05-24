const CustomAPIError = require('./custom-api')
const UnauthenticatedError=require('./unauthenticated')
const notFoundError = require('./not-found')
const BadRequestError = require("./bad-request")

module.exports={
    CustomAPIError,
    UnauthenticatedError,
    notFoundError,
    BadRequestError
}