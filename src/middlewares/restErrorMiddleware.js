const RestError = require('../utils/RestError');

const errorHandler = (error, req, res, next) => {
    console.log(error);

    const { type, code, message } = error;
    res.status(error.httpCode || 500).json({
        type,
        code,
        message,
    });
};

module.exports = errorHandler;
