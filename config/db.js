const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
        });
        console.log(
            `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
        );
    } catch (error) {
        console.error(`Unable to connect to the database ${error.message}`);
    }
};

module.exports = connectDB;
