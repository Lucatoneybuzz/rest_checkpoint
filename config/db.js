const mongoose = require('mongoose');

const connect = async () => {
    try {
        mongoose.set('strictQuery', false)
        const conn = await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log(
            `Connected To Mongodb Database: ${conn.connection.host}`)
    } catch (err) {
        console.log(`Error in MongoDB: ${err}`);
    }
}
module.exports = connect