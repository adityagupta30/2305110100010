const axios = require("axios");
require("dotenv").config();

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const LOG_API_URL = "http://4.224.186.213/evaluation-service/logs";


console.log("ACCESS_TOKEN:", ACCESS_TOKEN);

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

        
        console.log("Headers:", config.headers);
        console.log("Payload:", payload);

        const res = await axios.post(LOG_API_URL, payload, config);

        console.log("API Success:", res.data);

        return res.data;
    } catch (err) {
        console.log("Logging Failed");

        if (err.response) {
            console.log("Status:", err.response.status);
            console.log("Error Response:", err.response.data);
        } else {
            console.log("Error:", err.message);
        }
    }
}

module.exports = Log;