//1 informational response

//2 successfull
const OK = 200
const CREATED = 201

//3 further action needed

//4 client error
const BAD_REQUEST = 400
const UNAUTHIRIZED = 401
const FORBIDDEN = 403
const NOT_FOUND = 404
const METHOD_NOT_ALLOWED=405
const DUPLICATE_RESOURCE=409

//5 server error

const INTERNAL_SERVER_ERROR  = 500


export default{
    OK,
    CREATED,
    BAD_REQUEST,
    UNAUTHIRIZED,
    FORBIDDEN,
    NOT_FOUND,
    METHOD_NOT_ALLOWED,
    DUPLICATE_RESOURCE,
    INTERNAL_SERVER_ERROR
}