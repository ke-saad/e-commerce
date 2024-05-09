const mongoose = require('mongoose');

const MONGO_URI = "mongodb+srv://kesaad:1234@saadclust.2vh4e3z.mongodb.net/flipkart_db?retryWrites=true&w=majority&appName=saadClust";

const connectDatabase = () => {
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Mongoose Connected");
        });
}

module.exports = connectDatabase;
