class RestError extends Error {
    constructor(appError, err = {}) {
        const error = {
            ...err,
            ...appError,
        };

        super(error.message);
    }
}

module.exports = RestError;
