const errorHandler = (error, req, res, next) => {
    console.error(error.stack.red);

    res.status(500).json({
        status: 'FAILED',
        error: error.message,
    });
};

module.exports = errorHandler;