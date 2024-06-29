const app = require('./app');
const config = require('./utils/config');//Setting up as an env variable
const logger = require('./utils/logger');


app.listen(config.PORT,() => {
    logger.info(`server runing on port ${config.PORT}`)
});