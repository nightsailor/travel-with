const dotenv = require("dotenv");
const mongoose = require('mongoose');

dotenv.config({ path: './config/.env' });

// Step 2
mongoose.connect(
    process.env.MONGO_URL || 'mongodb://localhost/witty-travel',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    },
    (err) => {
      console.error("Connection error", err.message);
    }
);

const db = mongoose.connection

module.exports = db



