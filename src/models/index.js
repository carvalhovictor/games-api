const {connect} = require('mongoose');
const MONGODB_URL = process.env.DATABASE;

module.exports = () => {
    const options = {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
    return connect(MONGODB_URL, options);
};