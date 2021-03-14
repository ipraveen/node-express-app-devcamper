/**
 * ERROR CODE SERIES:
 * 01 -> Database issues
 * 02 -> TBD
 */



const appError = {
    RESOURCE_NOT_FOUND: {
        httpCode: 404,
        name: 'RESOURCE_NOT_FOUND',
        code: 'ERROR-01001',
        message: 'Resource not found with provided Id',
    },
    DUPLICATE_RESOURCE_DETAILS: {
        httpCode: 500,
        name: 'MONGODB_VALIDATION_FAILURE',
        code: 'ERROR-01002',
        message: 'Resource not found with provided Id',
    },
};

module.exports = appError;
