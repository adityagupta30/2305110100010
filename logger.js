const axios = require("axios");
require("dotenv").config();

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const LOG_API_URL = "YOUR_LOG_API_URL";

async function Log(stack, level, packageName, message) {
    try {
        const payload = {
            stack,
            level,
            package: packageName,
            message
        };

        const config = {
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
                "Content-Type": "application/json"
            }
        };

        const res = await axios.post(LOG_API_URL, payload, config);

        return res.data;
    } catch (err) {
        console.log("Logging Failed");

        if (err.response) {
            console.log("Error Response:", err.response.data);
        } else {
            console.log("Error:", err.message);
        }
    }
}

module.exports = Log;