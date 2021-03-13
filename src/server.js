const express = require('express');
const dotenv = require('dotenv');
const bootcampRoutes = require('./routes/bootcampRoutes');
const logger = require('./middlewares/logger');
const connectDB = require('./config/db.js');
const colors = require('colors');
const errorhandler = require('./middlewares/errors');

const envConfig = dotenv.config({ path: './src/config/config.env' });
if (envConfig.error) {
    throw envConfig.error;
}
connectDB();

const app = express();

// Sequence matters...a lot!
app.use(express.json()); // Covert payload to Json
app.use(logger); // log it
app.use('/api/v1/bootcamps', bootcampRoutes); // handle requests
app.use(errorhandler); // catch any errors.

const PORT = process.env.PORT;
const server = app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

// Handle unhandled rejection:

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: DB Connection failed: ${err.message}`);
    server.close(() => process.exit(1));
});
