const express = require('express');
const dotenv = require('dotenv');
const bootcampRoutes = require('./routes/bootcampRoutes');
const logger = require('./middlewares/logger');

dotenv.config({ path: './config/config.env' });
const app = express();

app.use(logger);
app.use('/api/v1/bootcamps', bootcampRoutes);





const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));
