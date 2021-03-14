class MongoDBError extends Error {
    constructor(error) {
        const { message, code } = error;
        super(message);
        this.name = 'MongoDBError';
        this.code = `APP-${code}`;

        console.error(error);
        switch (code) {
            case 11000:
                this.message = 'Resource has duplicate fields';
                this.systemMessage = message;
                break;

            default:
                break;
        }
    }
}

module.exports = MongoDBError;
